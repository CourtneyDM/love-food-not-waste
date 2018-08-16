import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from '../../components/Form';
import API from '../../utils/API';
import './Dashboard.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: [],
            isAuthenticated: true,
            modalEdit: false,
            modalDelete: false,
            row: [],
            _isMounted: false
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getInventory = this.getInventory.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    toggleEdit() {
        this.setState({
            modalEdit: !this.state.modalEdit
        });
    }

    toggleDelete() {
        this.setState({
            modalDelete: !this.state.modalDelete
        });
    }

    // Get inventory if component loaded successfully
    componentDidMount() {
        
        window.scrollTo(0, 0);
        $('#header').addClass('header-fill');
        const userId = localStorage.getItem('userId');
        console.log(userId)
        if (userId) {
            this.getInventory(userId);
        }
        this.setState({ _isMounted: true })

    }

    componentWillUnmount() {
        this.setState({ _isMounted: false })
        $('#header').removeClass('header-fill');
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    // Delete food item from database
    deleteItem = id => {
        API.deleteFoodItem(id)
            .then(() => this.getInventory(localStorage.getItem('userId')))
            .catch(error => { throw error });
    }

    // Get food items saved to database
    getInventory = id => {
        console.log(id)
        API.getInventory(id)
            .then(res => this.setState({ saved: res.data.data }))
            .catch(error => { throw error });
    }

    showEditModal = (data) => {
        this.setState({ _isMounted: true })

        if(this.state._isMounted===true){
            this.setState({row: data})
            this.toggleEdit();
        }
        
        
    }

    showDeleteModal = (data) => {
        if(this.state._isMounted===true){
        this.setState({ row: data })
        this.toggleDelete();
        }
        
    }

    

    render() {
        const tableSaved = $('#savedTable').DataTable();
        tableSaved.clear();

        $(document).ready(() => {

            $('#savedTable').DataTable({
                retrieve: true,
                "deferLoading": 0,
                "columns": [
                    { "data": "id", "visible": false, "searchable": false },
                    { "data": "category" },
                    { "data": "itemName" },
                    { "data": "quantity" },
                    { "data": "bestByDate" },
                    {
                        "data": "remove",
                        "render": function (data) {
                            data = "<button id='editRow'>Edit</button>  <button id='deleteRow'>Delete</button>";
                            return data;
                        }
                    }
                ]
            });
        });



        $('#savedTable tbody').on('click', 'button', (event) => {
            // When the click is received, turn off the click handler
            $('button').off("click");
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();

            const button = event.currentTarget
            const data = tableSaved.row(button.closest('tr')).data();
            const id = data.id;
            const action = event.currentTarget.id;

            if (action === 'editRow') {
                this.showEditModal(data)

            }
            if (action === 'deleteRow') {
                this.showDeleteModal(data)
            }
            
            ;

        });


        $('body').on('click', '.modal-xs #confirmDelete', (event) => {
            $('button').off("click");
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();

            
            console.log('Delete: ' + this.state.row.id )

            this.deleteItem(this.state.row.id);
            this.toggleDelete();
            tableSaved.draw();
            
        })

        return (
            <React.Fragment>
                <Modal className='modal-md' isOpen={this.state.modalEdit}>


                    <ModalHeader>Edit Food Item</ModalHeader>
                    <ModalBody className='modal-body'>
                        <form>
                            <div class="form-group row">
                                <label for="category" class="col-sm-2 col-form-label">Category</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="category" placeholder={this.state.row.category} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="item" class="col-sm-2 col-form-label">Food Item</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="item" placeholder={this.state.row.itemName} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="quantity" class="col-sm-2 col-form-label">Quantity</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="quantity" placeholder={this.state.row.quantity} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="date" class="col-sm-2 col-form-label">Best By</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="date" placeholder={this.state.row.bestByDate} />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button text='Submit' />
                        <Button text='Cancel' onClick={this.toggleEdit} />
                    </ModalFooter>

                </Modal>


                <Modal className='modal-xs' isOpen={this.state.modalDelete}>


                    <ModalHeader>Confirm Removal</ModalHeader>
                    <ModalBody className='modal-body'>
                        <p>Are you sure you would like to delete  {this.state.row.itemName} - ({this.state.row.quantity})?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button text='Remove' id="confirmDelete"/>
                        <Button text='Cancel' onClick={this.toggleDelete} />
                    </ModalFooter>

                </Modal>


                <div className="dashboard text-center section-header">
                    <h3>My Tracked Foods</h3>
                    <Link className='add-to-your-items' to="/FoodTracker">Add Food</Link>
                </div>
                {this.state.saved.slice(0, this.state.limit)
                    .map((saved, index) => {
                        tableSaved.row.add({
                            key: index,
                            id: saved._id,
                            category: saved.category,
                            itemName: saved.itemName,
                            quantity: saved.quantity,
                            bestByDate: saved.bestByDate,
                            remove: "Remove"
                        }).draw()
                    }

                    )}



                <div id='saved-table-container' className='container-fluid mx-auto'>
                    <table
                        id='savedTable'
                        className='table-striped table-bordered table-condensed text-left'
                    >
                        <thead>
                            <tr>
                                <th className="id">Id</th>
                                <th className="category">Category</th>
                                <th className="itemName">Food Item</th>
                                <th className="quantity">Quantity</th>
                                <th className="bestByDate">Best By</th>
                                <th className="remove">Action </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </ React.Fragment>

        );
    }
}

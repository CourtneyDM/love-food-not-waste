import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from '../../components/Form';
import API from '../../utils/API';
import './Dashboard.css';

const $ = require( 'jquery' );
$.DataTable = require( 'datatables.net' );

export class Dashboard extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            saved: [],
            recipes: [],
            isAuthenticated: true,
            modalEdit: false,
            modalDelete: false,
            row: [],
            fetchComplete: false
        }
        this.edit = this.edit.bind( this );
        this.delete = this.delete.bind( this );
        this.toggleEdit = this.toggleEdit.bind( this );
        this.toggleDelete = this.toggleDelete.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleClick = this.handleClick.bind( this );
        this.getInventory = this.getInventory.bind( this );
        this.deleteItem = this.deleteItem.bind( this );
    }


    toggleEdit() {
        this.setState( {
            modalEdit: !this.state.modalEdit
        } );
    }

    toggleDelete() {
        this.setState( {
            modalDelete: !this.state.modalDelete
        } );
    }
    // Get inventory if component loaded successfully
    componentDidMount() {
        window.scrollTo( 0, 0 );
        $( '#header' ).addClass( 'header-fill' );
        const userId = localStorage.getItem( 'userId' );
        if ( userId ) {
            this.getInventory( userId );
        }

    }

    componentWillUnmount() {
        $( '#header' ).removeClass( 'header-fill' );

    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        return this.logoutUser();
    }

    // Delete food item from database
    deleteItem = id => {
        API.deleteFoodItem( id )
            .then( () => this.getInventory( localStorage.getItem( 'userId' ) ) )
            .catch( error => { throw error } );
    }


    // Get food items saved to database
    getInventory = id => {
        API.getInventory( id )
            .then( res => this.setState( { saved: res.data.data, fetchComplete: true } ) )
            .then( () => this.getUserRecipes( localStorage.getItem( 'userId' ) ) )
            .catch( error => { throw error } );
    }

    // Get recipes saved to database
    getUserRecipes = id => {
        API.getUserRecipes( id )
            .then( res => console.log( res ) )
            // .then( res => this.setState( { recipes: res.data.data } ) )
            // .then( console.log( this.state.recipes ) )
            .catch( error => { throw error } );
    }

    editItem = ( id, category, item, quantity, date ) => {
        API.editInventory( id, category, item, quantity, date )
            .then( () => this.getInventory( localStorage.getItem( 'userId' ) ) )
            .catch( error => { throw error } );
    }


    delete = () => {
        console.log( this.state.row );
        this.deleteItem( this.state.row.id )
        this.toggleDelete();
    }


    edit = () => {
        console.log( this.state.row )
        let category = $( "#category" ).val()
        let foodItem = $( "#item" ).val()
        let quantity = $( "#quantity" ).val()
        let bestByDate = $( "#date" ).val()

        if ( category == '' ) {
            category = this.state.row.category;
        }
        if ( foodItem == '' ) {
            foodItem = this.state.row.itemName;
        }
        if ( quantity == '' ) {
            quantity = this.state.row.quantity;
        }
        if ( bestByDate == '' ) {
            bestByDate = this.state.row.bestByDate;
        }

        const id = this.state.row.id
        const data = { "itemName": foodItem, "category": category, "quantity": quantity, "bestByDate": bestByDate }
        this.editItem( id, category, foodItem, quantity, bestByDate )
        this.toggleEdit()
    }


    render() {
        const tableSaved = $( '#savedTable' ).DataTable();
        tableSaved.clear();

        $( document ).ready( function () {
            $( '#savedTable' ).DataTable( {
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
                        "render": function ( data ) {
                            data = "<button id='editRow'>Edit</button>  <button id='deleteRow'>Remove</button>";
                            return data;
                        }
                    }
                ]

            } );
        } );

        if ( this.state.fetchComplete === true ) {
            tableSaved.draw();
        }


        $( '#savedTable tbody' ).on( 'click', 'button', ( event ) => {
            // When the click is received, turn off the click handler
            $( 'button' ).off( "click" );
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();

            const button = event.currentTarget
            const data = tableSaved.row( button.closest( 'tr' ) ).data();
            const action = event.currentTarget.id;

            this.setState( { row: data } )

            if ( action === 'editRow' ) {
                this.toggleEdit();

            }
            if ( action === 'deleteRow' ) {
                this.toggleDelete();
            }

            ;

        } );

        // $('body').on('click', '.confirmDelete', (event) => {
        //     $('button').off("click");
        //     event.stopPropagation();
        //     event.stopImmediatePropagation();
        //     event.preventDefault();
        //     const id = event.currentTarget.id

        //     console.log('Delete: ' + id)

        //     // this.deleteItem(id);
        //     // this.toggleDelete();



        // })

        return (
            <React.Fragment>
                <Modal className='modal-md' isOpen={ this.state.modalEdit }>


                    <ModalHeader>Edit Food Item</ModalHeader>
                    <ModalBody className='modal-body'>
                        <form>
                            <div class="form-group row">
                                <label for="category" class="col-sm-2 col-form-label">Category</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="category" placeholder={ this.state.row.category } />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="item" class="col-sm-2 col-form-label">Food Item</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="item" placeholder={ this.state.row.itemName } />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="quantity" class="col-sm-2 col-form-label">Quantity</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="quantity" placeholder={ this.state.row.quantity } />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="date" class="col-sm-2 col-form-label">Best By</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="date" placeholder={ this.state.row.bestByDate } />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button text='Submit' onClick={ this.edit } />
                        <Button text='Cancel' onClick={ this.toggleEdit } />
                    </ModalFooter>

                </Modal>


                <Modal className='modal-xs' isOpen={ this.state.modalDelete }>


                    <ModalHeader>Confirm Removal</ModalHeader>
                    <ModalBody className='modal-body'>
                        <p>Are you sure you would like to delete  { this.state.row.itemName } - ({ this.state.row.quantity })?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button text='Remove' className="confirmDelete" onClick={ this.delete } />
                        <Button text='Cancel' onClick={ this.toggleDelete } />
                    </ModalFooter>

                </Modal>


                <div className="dashboard text-center section-header">
                    <h3>My Tracked Foods</h3>
                    {/* If user has at least 1 item saved in database, show the Update Food button */ }
                    { this.state.saved.length > 0 ?
                        <React.Fragment>
                            <Link className='add-to-your-items' to="/FoodTracker">Add Food</Link>
                            <Link className='modify-food-items' to="/FoodTracker">Update Food</Link>
                        </React.Fragment> :
                        // If user has no item saved, show only Add Food button
                        <Link className='add-to-your-items' to="/FoodTracker">Add Food</Link> }
                </div>
                { this.state.saved.slice( 0, this.state.limit )
                    .map( ( saved, index ) => {
                        tableSaved.row.add( {
                            key: index,
                            id: saved._id,
                            category: saved.category,
                            itemName: saved.itemName,
                            quantity: saved.quantity,
                            bestByDate: saved.bestByDate,
                            remove: "Remove"
                        } ).draw()
                    }

                    ) }



                <div id='saved-table-container' className='container-fluid mx-auto'>
                    <table
                        id='savedTable'
                        className='table-striped table-bordered table-condensed text-left' >
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
            </ React.Fragment >
        );
    }
}

// TODO: run getFullRecipe from dashboard - look at Recipes file, method "getFullRecipe"
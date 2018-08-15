import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './Dashboard.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: [],
            isAuthenticated: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getInventory = this.getInventory.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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
    }

    componentWillUnmount() {
        $('#header').removeClass('header-fill');
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        return this.logoutUser();
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

    render() {
        const tableSaved = $('#savedTable').DataTable();
        tableSaved.clear();

        $(document).ready(function () {
            $('#savedTable').DataTable({
                retrieve: true,
                "columns": [
                    { "data": "id", "visible": false, "searchable": false },
                    { "data": "category"},
                    { "data": "itemName"},
                    { "data": "quantity"},
                    { "data": "bestByDate"},
                    {
                        "data": "remove",
                        "render": function (data) {
                            data = "<button id='removeButton'>Remove</button>";
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

            console.log("Delete" + id)
            this.deleteItem(id)
            tableSaved.draw();
            ;

        });

        return (

            <React.Fragment>
                 <div class="dashboard text-center section-header">
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
                                <th className="remove">Remove </th>
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

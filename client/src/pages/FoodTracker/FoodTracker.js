import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../components/Form';
import API from '../../utils/API'
import './FoodTracker.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export class FoodTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            quantity: '',
            bestByDate: '',
            items: [],
            saved: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getFoodInventory = this.getFoodInventory.bind(this);
        this.saveFoodItem = this.saveFoodItem.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        $('#header').addClass('header-fill');
        const userId = localStorage.getItem('userId');
        console.log(userId)
        // console.log( localStorage.getItem('nickname')  );
        // Get the user's saved items from inventory database
        if ( userId) {
            this.getInventory(userId);
        }
    }

    componentWillUnmount() {
        $('#header').removeClass('header-fill');
    }

    login() {
        this.props.auth.login();
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
    }

    // Search API for specified food item
    getFoodDetails = query => {
        API.getFoodDetails(query)
            .then(results => {
                this.setState({
                    items: results.data.branded,
                });
                console.log(this.state.items);
            })
            .catch(error => { throw error });
        // TODO: display results for failed request with status code 400
    }

    // Save food item to database
    saveFoodItem = foodData => {
        console.log(`saveFoodItem: ${foodData.user}`);
        API.saveFoodItem(foodData)
            .catch(error => { throw error });
    }

    // Get food item from database
    getFoodInventory = query => {
        API.getFoodInventory(query)
            .then(console.log('Query:' + query))
            .then(res => this.setState({ items: res.data.data }))
            .then(console.log(this.state.items))
            .catch(error => { throw error });
    }

    searchButtonClick = () => {
        console.log("Searching for: " + this.state.itemName);
        this.getFoodInventory(this.state.itemName);
        $(".messages").empty();

    }

    getInventory = id => {
        console.log(id)
        API.getInventory(id)
            .then( res => this.setState( { saved: res.data.data } ) )
            .catch( error => { throw error } );
    }


    render() {
        const tableSearch = $('#searchTable').DataTable();
        tableSearch.clear();

        const { isAuthenticated } = this.props.auth;
        const userId = localStorage.getItem('userId');

        $(document).ready(function () {
            $('#searchTable').DataTable({
                retrieve: true,
                "language": {
                    "search": "Filter"
                    , "emptyTable": "Please search for an item above"
                    , "zeroRecords": "No items found.  Please try your search again."
                },
                "autoWidth": "false",
                "columns": [
                    { "data": "category", "width": "20%", },
                    { "data": "item", "width": "20%", },
                    { "data": "guidelines", "width": "30%", },
                    {
                        "data": "quantity",
                        "width": "10%",
                        "render": function (data) {
                            data = "<input className='quantityInput' ></input>"
                            return data;
                        }
                    },
                    {
                        "data": "bestBy",
                        "width": "10%",
                        "render": function (data) {
                            data = "<input type='date' id='date' className='bestByInput'></input>"
                            return data;
                        }
                    },
                    {
                        "data": "add",
                        "width": "10%",
                        "render": function (data) {
                            data = "<button id='addButton'>" + data + "</button>";
                            return data;
                        }
                    }
                ]
            })
        });

        $('#searchTable tbody').on('click', 'button', (event) => {
            // When the click is received, turn off the click handler
            $('button').off("click");

            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
            const button = event.currentTarget
            console.log(tableSearch.row(button.closest('tr')));

            const data = tableSearch.row(button.closest('tr')).data();
            console.log(data);
            const item = data.item;
            const category= data.category
            const quantity = tableSearch.row(button.closest('tr')).nodes().to$().find('input').val();
            const date = tableSearch.row(button.closest('tr')).nodes().to$().find('#date').val();
            

            this.saveFoodItem({
                category: category,
                itemName: item,
                quantity: quantity,
                bestByDate: date,
                user: userId
            });

            const message = '<div class="alert alert-success col-sm-7 mx-auto" role="alert">' + item + ' was added sucessfully.</div>'
            const add = '<p>'+ item +', ' + quantity +'</p>'
            $(".messages").append(message);
            $(".your-inventory-container").prepend(add)

        

                tableSearch.clear()
                .draw();
        });

        return (
            <React.Fragment>

                <div class="inventory text-center section-header">

                    <h3>Food Tracker</h3>
                    <p>Don't forget what you have on hand or miss upcoming expiration dates!  Search for food to add to your personal tracker.</p>
                    {/* SEARCH FOR FOOD SECTION */}
                    <form>
                        <div className='form-inline '>
                            <div class="form-group mb-2 mx-auto">
                                <Input
                                    id="searchForm"
                                    name='itemName'
                                    label='Item: '
                                    placeholder='Required'
                                    onChange={this.handleInputChange} />


                                <Button
                                    className='btn btn-search '
                                    text='Search'
                                    onClick={() => this.searchButtonClick()
                                    }
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* DISPLAY SEARCH RESULTS SECTION */}

                <React.Fragment>

                    {/* Branded Foods */}


                    {/* // { this.state.items.slice( 0, this.state.limit ).map( ( brand, index ) => { */}

                    {/* //     tableSearch.row.add( { */}
                    {/* //         item: brand.food_name, */}
                    {/* //         quantity: 0, */}
                    {this.state.items.slice(0, this.state.items.length).map((brand, index) => {
                        tableSearch.row.add({
                            key: index,
                            category: brand.category,
                            item: brand.item,
                            guidelines: `Pantry: ${brand.pantry}\n<br>Refrigerator: ${brand.refrigerator}\n<br>Freezer: ${brand.freezer}`,
                            quantity: 1,
                            bestByDate: "",
                            add: "Add"
                        }).draw();

                    })}

                    <div className="messages"></div>
                    <div className="content-container mx-auto">
                    <div id='tableContainer' className='container-fluid mx-auto'>
                        <table
                            id='searchTable'
                            className='table-striped table-bordered table-condensed text-left'
                            width="100%">
                            <thead>
                                <tr>
                                    <th className="category">Category</th>
                                    <th className="item_name">Item</th>
                                    <th className="guidelines">Guidelines</th>
                                    <th className="quantity">Quantity</th>
                                    <th className="bestByDate">Best By</th>
                                    <th className="add">Add </th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div className="card newItem">
                    <div className="card-header">
                    <h5 className="text-center">Your Items</h5>
                        <Link className='your-tracker' to="/dashboard">Your Tracker</Link>
                    </div>
                    <div className="card-body">
                        
                        <React.Fragment>
                            <div className="your-inventory-container">
                        { this.state.saved.slice( 0, this.state.limit )
                                        .map( ( saved, index ) => {
                                          return(<p>{saved.itemName}, {saved.quantity}</p>);
                                        }
                                    )}
                                    </div>
                                    </React.Fragment>
                    </div>
                </div>
               
                <div class="clearfix"></div>
                </div>
                </React.Fragment>


                


            </React.Fragment>

        )
    }
}
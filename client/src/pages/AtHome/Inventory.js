import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../components/Form';
import API from '../../utils/API'
import { CardDeck, CardBasic } from '../../components/Card';
import './Inventory.css';

const $ = require( 'jquery' );
$.DataTable = require( 'datatables.net' );

export class Inventory extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            barCode: '',
            itemName: '',
            itemBrandName: '',
            quantity: '',
            dateAdded: '',
            bestByDate: '',
            brands: [],
            saved: [],
            limit: 25
        }

        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleClick = this.handleClick.bind( this );
        this.saveFoodItem = this.saveFoodItem.bind( this );
        this.getFoodInventory = this.getFoodInventory.bind( this );
        this.saveFoodInventory = this.saveFoodInventory.bind( this );
        this.getRecipe = this.getRecipe.bind( this );
    }
    componentDidMount() {
        // Get the items saved in inventory database
        // this.saveFoodInventory( {
        //     category: "Fruit",
        //     item: "Chocolate Covered Cherries",
        //     pantry: "2-3 Weeks",
        //     refrigerator: "6 Months",
        //     freezer: "1 Year"
        // });
        console.log( "User ID:" + window.sessionStorage.getItem( "userID" ) );
    }


    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
    }

    // Search API for specified food item
    getFoodDetails = query => {
        API.getFoodDetails( query )
            .then( results => {
                this.setState( {
                    brands: results.data.branded,
                } );
                console.log( this.state.brands );
            } )
            .catch( error => { throw error } );
        // TODO: display results for failed request with status code 400
    }

    // Save food item to database
    saveFoodItem = foodData => {
        console.log( `saveFoodItem: ${foodData}` );
        API.saveFoodItem( foodData )
            .catch( error => { throw error } );
    }

    // Get food item from database
    getFoodInventory = query => {
        API.getFoodInventory( query )
            .then( console.log( query ) )
            .then( res => this.setState( { brands: res.data.data } ) )
            .then( console.log( this.state.brands ) )
            .catch( error => { throw error } );
    }

    searchButtonClick = () => {
        console.log( "Searching for: " + this.state.itemName )
        this.getFoodInventory( this.state.itemName )

    }

    // Save food item to database
    saveFoodInventory = foodData => {
        API.saveFoodInventory( foodData )
            .then( res => { console.log( res ) } )
            .catch( error => { throw error } );
    }

    // Find a recipe
    getRecipe = ingredients => {
        API.getIngredientRecipe( ingredients )
            .then( res => console.log( `Recipe search results: ${JSON.stringify( res, null, 2 )}` ) )
            .catch( error => { throw error } );
    }

    render() {
        const tableSearch = $( '#searchTable' ).DataTable();
        tableSearch.clear();

        $( document ).ready( function () {
            $( '#searchTable' ).DataTable( {
                retrieve: true,
                "autoWidth": false,
                "columns": [
                    { "data": "category" },
                    { "data": "item" },
                    { "data": "guidelines", },
                    {
                        "data": "quantity",
                        "render": function ( data ) {
                            data = "<input className='quantityInput'></input>"
                            return data;
                        }
                    },
                    {
                        "data": "bestBy",
                        "render": function ( data ) {
                            data = "<input type='date' id='date' className='bestByInput'></input>"
                            return data;
                        }
                    },
                    {
                        "data": "add",
                        "render": function ( data ) {
                            data = "<button id='addButton'>" + data + "</button>";
                            return data;
                        }
                    }
                ]
            } )
        } );

        $( '#searchTable tbody' ).on( 'click', 'button', ( event ) => {
            // When the click is received, turn off the click handler
            $( 'button' ).off( "click" );

            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
            const button = event.currentTarget
            console.log( tableSearch.row( button.closest( 'tr' ) ) );

            const data = tableSearch.row( button.closest( 'tr' ) ).data();
            const item = data.item;

            const quantity = tableSearch.row( button.closest( 'tr' ) ).nodes().to$().find( 'input' ).val();
            const date = tableSearch.row( button.closest( 'tr' ) ).nodes().to$().find( '#date' ).val();

            this.saveFoodItem( {
                itemName: item,
                quantity: quantity,
                bestByDate: date
            } );
            alert( 'Your item has been added.' );
        } );

        return (
            <React.Fragment>
                {/* Section to display inventory */ }
                <CardDeck>
                    <CardBasic
                        header='Food Inventory'>
                        <div className='container-fluid'>
                            <figure>
                                <img src='/assets/images/foodwaste.jpg' id='foodWaste' alt='Food Waste' width='200px' />
                            </figure>
                            <p>Do you know how long your food lasts?  <a href='http://time.com/3933554/food-waste/' target='_blank' rel='noopener noreferrer'>Americans waste over $640 per year </a> according to a recent survey by the American Chemistry Council.  Forgetting when your food expires or misinterpreting labels is a big contributer to food waste. </p>
                            <br />
                            <p>We believe we can do better!  Use our food tracker to keep an inventory of items you have on hand.  When food is about to expire, check out our recipes to find out how you can use it before you lose it, or consider donating to a local food bank.</p>
                        </div>

                        <h5 className='text-center sectionHeader'>Manage your Inventory</h5>
                        <Link id='viewSaved' className='text-center' to="/dashboard">If you've logged in, click here to view your saved inventory items.</Link>

                        {/* SEARCH FOR FOOD SECTION */ }
                        <h5 className='text-center sectionHeader'>Add to your Inventory</h5>
                        <Input
                            id="searchForm"
                            name='itemName'
                            label='Item Name: '
                            placeholder='Required'
                            onChange={ this.handleInputChange }>
                            <Button
                                className='btn btn-search'
                                text='Search for Item'
                                onClick={ () => this.searchButtonClick()
                                }
                            />
                        </Input>

                        {/* DISPLAY SEARCH RESULTS SECTION */ }
                        <React.Fragment>
                            <h6 className='text-center sectionHeader'>Search Results</h6>
                            {/* Branded Foods */ }


                            {/* // { this.state.brands.slice( 0, this.state.limit ).map( ( brand, index ) => { */ }

                            {/* //     tableSearch.row.add( { */ }
                            {/* //         item: brand.food_name, */ }
                            {/* //         quantity: 0, */ }
                            { this.state.brands.slice( 0, this.state.brands.length ).map( ( brand, index ) => {
                                tableSearch.row.add( {
                                    key: index,
                                    category: brand.category,
                                    item: brand.item,
                                    guidelines: `Pantry: ${brand.pantry}\nRefrigerator: ${brand.refrigerator}\nFreezer: ${brand.freezer}`,
                                    quantity: 1,
                                    bestByDate: "",
                                    add: "Add"
                                } ).draw();

                            } ) }
                            <div
                                id='tableContainer' className='container-fluid'>
                                <table
                                    id='searchTable'
                                    className='display'
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
                        </React.Fragment>
                    </CardBasic>
                </CardDeck>
            </React.Fragment>
        )
    }
}
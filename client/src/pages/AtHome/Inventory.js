import React, { Component } from 'react';
import { Input, Button } from '../../components/Form';
import API from '../../utils/API'
import InventoryItem from '../AtHome/InventoryItem'
import { CardDeck, CardBasic } from '../../components/Card';
import { Section } from '../../components/Content';
import './Inventory.css';


const $ = require( 'jquery' );
$.DataTable = require( 'datatables.net' );

class Inventory extends Component {
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
        console.log( foodData );
        API.saveFoodItem( foodData )
            // .then( results => this.getInventory() )
            .catch( error => { throw error } );
    }

    render() {


        const tableSearch = $( '#searchTable' ).DataTable();
        tableSearch.clear();


        $( document ).ready( function () {




            $( '#searchTable' ).DataTable( {

                retrieve: true,
                "columns": [
                    { "data": "item", "width": "30%" },
                    {
                        "data": "quantity", "width": "5%",
                        "render": function ( data ) {
                            data = "<input className='quantityInput'></input>"
                            return data;
                        }
                    },
                    {
                        "data": "bestBy", "width": "5%",
                        "render": function ( data ) {
                            data = "<input type='date' id='date' className='bestByInput'></input>"
                            return data;
                        }
                    },
                    {
                        "data": "add", "width": "5%",
                        "render": function ( data ) {

                            data = "<button id='addButton'>" + data + "</button>";

                            return data;
                        }
                    }
                ]

            } )

        } );

        $( '#searchTable tbody' ).on( 'click', 'button', ( event ) => {
            $( 'button' ).off( "click" ); // When the click is received, turn off the click handler

            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
            const button = event.currentTarget


            const data = tableSearch.row( button.closest( 'tr' ) ).data();
            const item = data.item;
            const quantity = tableSearch.row( button.closest( 'tr' ) ).nodes().to$().find( 'input' ).val()
            const date = tableSearch.row( button.closest( 'tr' ) ).nodes().to$().find( '#date' ).val()



            this.saveFoodItem( {
                itemName: item,
                quantity: quantity,
                bestByDate: date
            } )




        } )



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
                            <p>Do you know how long your food lasts?  <a href='http://time.com/3933554/food-waste/' target='_blank'>Americans waste over $640 per year </a> according to a recent survey by the American Chemistry Council.  Forgetting when your food expires or misinterpreting labels is a big contributer to food waste. </p>
                            <br />
                            <p>We believe we can do better!  Use our food tracker to keep an inventory of items you have on hand.  When food is about to expire, check out our recipes to find out how you can use it before you lose it.</p>
                        </div>


                        {/* SEARCH FOR FOOD SECTION */ }
                        <h5 className='text-center sectionHeader'>Add to your Inventory</h5>

                        <Input

                            label='Item Name: '
                            name='itemName'
                            placeholder='Required'
                            onChange={ this.handleInputChange }>
                            <Button
                                className='btn btn-search'
                                text='Search for Item'
                                onClick={ () => this.getFoodDetails( this.state.itemName ) }
                            />
                        </Input>

                        {/* DISPLAY SEARCH RESULTS SECTION */ }

                        { !this.state.brands.length ? (


                            <Section>
                                <br />
                                <p className='text-center'><i>Search for an item to add to your inventory.</i></p></Section>
                        ) : (
                                <React.Fragment>

                                    <h6 className='text-center sectionHeader'>Search Results</h6>


                                    {/* Branded Foods */ }


                                    { this.state.brands.slice( 0, this.state.limit ).map( ( brand, index ) => {


                                        tableSearch.row.add( {
                                            item: brand.food_name,
                                            quantity: 0,
                                            bestByDate: "",
                                            add: "Add"
                                        } ).draw();

                                    }
                                    )




                                    }
                                    <div id='tableContainer' className='container-fluid'>
                                        <table id='searchTable' className="display">
                                            <thead>
                                                <tr>
                                                    <th className="item_name">Item</th>
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
                            )
                        }

                    </CardBasic>
                </CardDeck>
            </React.Fragment>
        )
    }


}

export default Inventory;

// TODO: Setup the InventoryItem component to display the search results from the API for both brand names and common foods
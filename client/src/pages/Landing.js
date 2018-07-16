import React, { Component } from 'react';
// import Moment from 'momentjs';
import API from '../utils/API'
import { CardDeck, CardBasic } from '../components/Card';



const $ = require( 'jquery' );
$.DataTable = require( 'datatables.net' );

class Landing extends Component {
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
            limit: 25,
            profile: {
                username: '',
                userId: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleClick = this.handleClick.bind( this );
    }

    // TODO: Don't do shit right now!!
    componentDidMount() {
        // Get the items saved in inventory database
        // this.getInventory();
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        alert( this.state.itemName );
    }

    // Delete food item from database
    deleteItem = id => {
        API.deleteFoodItem( id )
            .then( results => this.getInventory() )
            .catch( error => { throw error } );
    }

    // Get food items saved to database
    getInventory = () => {
        API.getInventory()
            .then( res => this.setState( { saved: res.data } ) )
            .catch( error => { throw error } );
    }



    render() {

        const tableSaved = $( '#savedTable' ).DataTable();


        $( document ).ready( function () {
            $.getJSON( '/api/inventory', function ( response ) {
                console.log( response.data );
                $( '#savedTable' ).DataTable( {

                    "data": response.data,
                    "columns": [
                        { "data": "itemName", "width": "30%" },
                        {
                            "data": "bestByDate", "width": "5%"

                        }
                    ]

                } )
            } );
        } );








        return (


            <React.Fragment>
                <CardDeck>
                    <CardBasic
                        header='My Food'>
                        <div id='tableContainer' className='container-fluid'>
                            <table id='savedTable' className="display">
                                <thead>
                                    <tr>
                                        <th className="item_name">Item</th>
                                        <th className="bestByDate">Best By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>

                    </CardBasic>
                </CardDeck>
            </React.Fragment>
        )
    }


}

export default Landing;

// TODO: Setup the InventoryItem component to display the search results from the API for both brand names and common foods
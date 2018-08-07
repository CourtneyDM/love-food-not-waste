import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CardDeck, CardBasic } from '../components/Card';
import API from '../utils/API';
// import Auth from '../utils/Auth';

const $ = require( 'jquery' );
$.DataTable = require( 'datatables.net' );

export class Dashboard extends Component {
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
            limit: 5,
            isAuthenticated: true
        }

        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleClick = this.handleClick.bind( this );
        this.getInventory = this.getInventory.bind( this );
        this.deleteItem = this.deleteItem.bind( this );
    }

    // Get inventory if component loaded successfully
    componentDidMount() {
        console.log( window.sessionStorage );
        // Get the user's saved items from inventory database
        if ( window.sessionStorage.getItem( 'username' ) ) {
            this.getInventory();
        }
    }


    componentWillUnmount() {
        this.setState( {
            barCode: '',
            itemName: '',
            itemBrandName: '',
            quantity: '',
            dateAdded: '',
            bestByDate: '',
            brands: [],
            saved: [],
            limit: 5,
            isAuthenticated: false
        } );
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
            .then( this.getInventory() )
            .catch( error => { throw error } );
    }

    // Get food items saved to database
    getInventory = () => {
        API.getInventory()
            .then( res => this.setState( { saved: res.data.data } ) )
            .catch( error => { throw error } );
    }

    render() {
        const tableSaved = $( '#savedTable' ).DataTable();
        tableSaved.clear();

        $( document ).ready( function () {
            $( '#savedTable' ).DataTable( {
                retrieve: true,
                "columns": [
                    { "data": "id", "visible": false, "searchable": false },
                    { "data": "itemName", "width": "20%" },
                    { "data": "quantity", "width": "5%" },
                    { "data": "bestByDate", "width": "5%" },
                    {
                        "data": "remove", "width": "5%",
                        "render": function ( data ) {
                            data = "<button className='removeButton'>Remove</button>";
                            return data;
                        }
                    }
                ]
            } );
        } );

        $( '#savedTable tbody' ).on( 'click', 'button', ( event ) => {
            // When the click is received, turn off the click handler
            $( 'button' ).off( "click" );
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();

            const button = event.currentTarget
            const data = tableSaved.row( button.closest( 'tr' ) ).data();
            const id = data.id;

            console.log( id )
            this.deleteItem( id );

        } );
        return (
            <Route exact path='/dashboard' render={ () => (
                // Check if user data has been stored to session
                window.sessionStorage.getItem( 'username' ) ?
                    < React.Fragment >
                        <CardDeck>
                            <CardBasic
                                header='My Foods'>
                                <React.Fragment>
                                    <h6 className='text-center sectionHeader'>Search Results</h6>
                                    { this.state.saved.slice( 0, this.state.limit )
                                        .map( ( saved, index ) => {
                                            tableSaved.row.add( {
                                                key: index,
                                                id: saved._id,
                                                itemName: saved.itemName,
                                                quantity: saved.quantity,
                                                bestByDate: saved.bestByDate,
                                                remove: "Remove"
                                            } ).draw()
                                        }

                                        ) }


                                    <div id='tableContainer' className='container-fluid'>
                                        <table id='savedTable' className="display">
                                            <thead>
                                                <tr>
                                                    <th className="id">Id</th>
                                                    <th className="itemName">Item</th>
                                                    <th className="quantity">Quantity</th>
                                                    <th className="bestByDate">Best By</th>
                                                    <th className="remove">Remove </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>

                                </React.Fragment>

                            </CardBasic>
                        </CardDeck>
                    </ React.Fragment>
                    :
                    // If user is not logged in, redirect to home page
                    <Redirect to='/login' />
            )
            } />
        );
    }
}
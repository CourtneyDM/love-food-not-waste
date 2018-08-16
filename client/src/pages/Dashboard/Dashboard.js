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
            recipe: [],
            recipes: [],
            ingredientList: [],
            steps: [],
            isAuthenticated: true,
            modalEdit: false,
            modalDelete: false,
            modalRecipe: false,
            row: [],
            fetchComplete: false
        }
        this.edit = this.edit.bind( this );
        this.delete = this.delete.bind( this );
        this.toggleEdit = this.toggleEdit.bind( this );
        this.toggleDelete = this.toggleDelete.bind( this );
        this.toggleRecipe = this.toggleRecipe.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleClick = this.handleClick.bind( this );
        this.getInventory = this.getInventory.bind( this );
        this.deleteItem = this.deleteItem.bind( this );
        this.deleteRecipe = this.deleteRecipe.bind( this );
    }

    // 
    toggleRecipe() {
        this.setState( {
            modalRecipe: !this.state.modalRecipe
        } );
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

    // Delete recipe from database
    deleteRecipe = id => {
        API.deleteRecipe( id )

            .then( alert( "Recipe has been removed from your profile." ) )

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
            // .then( res => console.log( res ) )
            .then( res => this.setState( { recipes: res.data.data } ) )
            // .then( console.log( this.state.recipes ) )
            .catch( error => { throw error } );
    }

    editItem = ( id, category, item, quantity, date ) => {
        API.editInventory( id, category, item, quantity, date )
            .then( () => this.getInventory( localStorage.getItem( 'userId' ) ) )
            .catch( error => { throw error } );
    }

    getFullRecipe = ( id ) => {
        API.getFullRecipe( id )
            // .then(res=> console.log(res.data))
            .then( response => {
                if ( response.data.analyzedInstructions.length === 0 ) {
                    this.setState( {
                        recipe: response.data,
                        ingredientList: response.data.extendedIngredients
                    } );
                } else {
                    this.setState( {
                        recipe: response.data,
                        ingredientList: response.data.extendedIngredients,
                        steps: response.data.analyzedInstructions[ 0 ].steps
                    } );
                }
            } )
            .catch( error => { throw error } );
    }

    showRecipeModal = ( id ) => {
        console.log( "Recipe ID: " + id );
        this.getFullRecipe( id );
        this.toggleRecipe();
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

            this.setState( { row: data } );

            if ( action === 'editRow' ) {
                this.toggleEdit();

            }
            if ( action === 'deleteRow' ) {
                this.toggleDelete();
            }



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

                {/* Recipe Modal */ }
                <Modal className='modal-lg' isOpen={ this.state.modalRecipe }>
                    <ModalHeader>{ this.state.recipe.title }</ModalHeader>
                    <ModalBody className='recipe-modal-body'>
                        <img src={ this.state.recipe.image } className='fullRecipeImg' alt={ `${this.state.recipe.title}` } />
                        <div className='recipe-top'>
                            <p><b>Serving Size:</b> { this.state.recipe.servings }</p>
                            <p><b>Ready in:</b> { this.state.recipe.readyInMinutes } minutes</p>
                            <p><b>Ingredients:</b></p>
                            <ul className='recipe-ingredients'>
                                { this.state.ingredientList.map( ( item ) => ( <li className='bullets' key={ item.id }>{ item.originalString }</li> ) ) }
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                        <p><b>Instructions:</b></p>
                        {
                            this.state.steps.length === 0 && ( <p><i>Instructions currently unavailable.  Please check the websites below.</i></p> )
                        }

                        <ol>
                            { this.state.steps.map( ( item, index ) => ( <li key={ index }>{ item.step }</li> ) ) }
                        </ol>

                        <a href={ this.state.recipe.sourceUrl } target="_blank">Orignally posted by { this.state.recipe.sourceName }</a>
                        <br />
                        <a href={ this.state.recipe.spoonacularSourceUrl } target="_blank">Obtained from Spoonacular</a>

                    </ModalBody>
                    <ModalFooter>
                        <Button text='Close' onClick={ this.toggleRecipe } />
                    </ModalFooter>
                </Modal>


                <div className="dashboard text-center section-header">
                    <h3>My Dashboard</h3>
                    <Link className='add-to-your-items' to="/FoodTracker">Add Food</Link>
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
                {/* SECTION TO DISPLAY RECIPES */ }
                <div className="row recipe-container">
                    {
                        this.state.recipes.length === 0 && (
                            <div className='recipe-message'>
                                <h5><b>No Saved Recipes</b></h5>
                                <p>To save a recipe to your profile, simple click the "Save for Later"  button when viewing a recipe card. </p>
                            </div>
                        )
                    }
                    { this.state.recipes.length > 0 && (
                        <React.Fragment>

                            <Link className='add-to-your-items' to="/Recipes">Add Recipes</Link>
                            <br />
                            { this.state.recipes.slice( 0, this.state.recipes.length ).map( ( recipe, index ) => {
                                console.log( `Recipe details: ${JSON.stringify( recipe, null, 2 )}` );
                                return (
                                    <div className="col-lg-3 col-md-6 recipe-item" id={ index }>
                                        <div className="recipe-wrap">
                                            <figure>
                                                <img src={ recipe.imageURL } className="img-fluid" alt="" />
                                            </figure>

                                            <div className="recipe-info">
                                                <p className='recipe-title block-with-text'><b>{ recipe.title }</b></p>
                                                <Button className='btn btn-sm btn-view' text='View' onClick={ () => this.showRecipeModal( recipe.recipeID ) }>{ recipe.recipeID }</Button><br />
                                                <Button className="btn btn-sm btn-danger " text='Delete Recipe' onClick={ () => this.deleteRecipe( recipe._id ) }>{ recipe._id }</Button>

                                            </div>
                                        </div>

                                    </div>
                                );
                            } ) }
                        </React.Fragment>
                    )
                    }

                </div>
            </ React.Fragment >
        );
    }
}

// TODO: run getFullRecipe from dashboard - look at Recipes file, method "getFullRecipe"
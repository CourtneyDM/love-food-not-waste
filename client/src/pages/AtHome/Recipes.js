import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Input, Button } from '../../components/Form';
import { CardDeck, CardBasic } from '../../components/Card'
import API from '../../utils/API';
import './Recipes.css'

export class Recipes extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            recipeSearch: '',
            recipes: [],
            limit: 5
        }
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        // alert(this.state.itemName);
    }

    // Find a recipe
    getRecipe = ingredients => {
        console.log( ingredients )
        API.getIngredientRecipe( ingredients )
            .then( res => this.setState( { recipes: res.data } ) )
            .then( res => console.log( `Recipe search results: ${JSON.stringify( res, null, 2 )}` ) )
            .catch( error => { throw error } );
    }

    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Recipes'>
                        <form className='form-control'>
                            <Input
                                id="searchForm"
                                name='itemName'
                                label='Item Name: '
                                placeholder='Required'
                                onChange={ this.handleInputChange } />
                            <Button
                                className='btn btn-search'
                                text='Find Recipes'
                                onClick={ () => this.getRecipe( this.state.itemName )
                                }
                            />
                        </form>
                        <div className='recipes'>
                            { this.state.recipes.slice( 0, this.state.recipes.length ).map( ( recipe, index ) => {
                                return (
                                    <CardBasic
                                        key={ index }
                                        className='recipeCard'
                                        header={ recipe.title }>
                                        <div className='recipeContainer'>
                                            <img src={ recipe.image } className='recipeImg' alt={ `${recipe.title}` } width='200px' />
                                            <br />
                                            <a href="/dashboard" className='text-center'>View Recipe</a>
                                        </div>
                                    </CardBasic>
                                );
                            } ) }
                        </div>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};
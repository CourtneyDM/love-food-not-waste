import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../components/Form';
import { CardDeck, CardBasic } from '../../components/Card'
import API from '../../utils/API';
import './Recipes.css'
import { timingSafeEqual } from 'crypto';

export class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeSearch: '',
            ingredients: 0,
            recipes: [],
            limit: 1
        }
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        // alert(this.state.itemName);
    }

    // Find a recipe
    getRecipe = (ingredients, limit) => {
        this.setState({ ingredients: (ingredients.match(/,/g) || []).length + 1 })
        console.log(ingredients)
        API.getIngredientRecipe(ingredients, limit)
            //  .then(res => console.log(res))
            .then(res => this.setState({ recipes: res.data }))
            .catch(error => { throw error });
    }

    missedIngredients = (ingredients, usedIngredients) => {
        return parseInt(ingredients) - parseInt(usedIngredients)
    }

    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Recipes'>
                        <p className='text-center'>Enter all ingredients you would like to use in the recipe, separated by commas.</p>
                        <form className='form-control form-inline'>
                            <Input
                                id="ingredientSearchBox"
                                name='itemName'
                                label='Ingredient(s): '
                                placeholder='Required'
                                onChange={this.handleInputChange} />
                            <Button
                                className='btn btn-search'
                                text='Find Recipes'
                                onClick={() => this.getRecipe(this.state.itemName, this.state.limit)
                                }
                            />
                        </form>
                        <div className='recipes'>
                            {this.state.recipes.slice(0, this.state.recipes.length).map((recipe, index) => {
                                return (

                                    <CardBasic
                                        key={index}
                                        id='recipeCard'
                                        header={recipe.title}>
                                        <div className='recipeContainer'>
                                            <img src={recipe.image} className='recipeImg' alt={`${recipe.title}`} />
                                            <div>Used ingredients:  {recipe.usedIngredientCount}</div>
                                            <div>Missed ingredients: {this.missedIngredients(this.state.ingredients, recipe.usedIngredientCount)}</div>
                                            
                                            <Link to={{ pathname: '/AtHome/Recipe', state: { title: recipe.title, id: recipe.id }, onclick: localStorage.setItem('recipeId', recipe.id)}}>View Recipe</Link>
                                        </div>
                                    </CardBasic>
                                );
                            })}
                        </div>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};
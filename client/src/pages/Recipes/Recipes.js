import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, Button } from '../../components/Form';
import API from '../../utils/API';
import './Recipes.css'

const $ = require('jquery');

export class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeSearch: '',
            ingredients: 0,
            recipes: [],
            limit: 1,
            modal: false

        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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


    componentDidMount() {
        window.scrollTo(0, 0);
        $('#header').addClass('header-fill');
        console.log(this.state.show)
    }

    componentWillUnmount() {
        $('#header').removeClass('header-fill');
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


    findRecipeClick = () => {
        console.log("Retrieving " + this.state.limit + " results for: " + this.state.itemName);
        this.getRecipe(this.state.itemName, this.state.limit);

        setTimeout(() => {
            if (this.state.recipes.length === 0) {
                $(".recipe-message").empty()
                $(".recipe-message").html('<div class="alert alert-danger text-center">No results were found.  Please try again.</div><p><b>Instructions:</b>  To search, enter all ingredients you would like to use in the recipe separated by commas.  For example, if you have strawberries and kale that are nearing expiration, search for "Strawberries,Kale".</p><p>Once you find a recipe you like, save it to your account for future use.</p>')
            }
        }, 1000);


    }




    render() {
        return (


            <React.Fragment>
<Modal isOpen={this.state.modal}>
                        <form onSubmit={this.handleSubmit}>

                            <ModalHeader>Test</ModalHeader>
                            <ModalBody>
                                Ingredients
                                Instructions
                            </ModalBody>
                            <ModalFooter>

                                <Button text='Close' onClick={this.toggle} />
                            </ModalFooter>
                        </form>
                    </Modal>

                <div class="recipes text-center section-header">

                    <h3>Recipes</h3>
                    <p>Finding recipes that use specific ingredients you have on hand is a great way to prevent food waste!</p>


                    <form>
                        <div className='form-inline '>
                            <div class="form-group mb-2 mx-auto">
                                <Input
                                    id="ingredientSearchBox"
                                    name='itemName'
                                    label='Ingredient(s): '
                                    placeholder='Required'
                                    onChange={this.handleInputChange} />


                                <Button
                                    className='btn btn-search '
                                    text='Find Recipes'
                                    onClick={() => this.findRecipeClick()
                                    }
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row recipe-container">

                    {
                        this.state.recipes.length === 0 && (
                            <div className='recipe-message'>
                                <p><b>Instructions:</b>  To search, enter all ingredients you would like to use in the recipe separated by commas.
                                  For example, if you have strawberries and kale that are nearing expiration, search for "Strawberries,Kale".</p>
                                <p>Once you find a recipe you like, save it to your account for future use.</p>
                            </div>
                        )
                    }
                    {this.state.recipes.length > 0 && (

                        <React.Fragment>
                            {this.state.recipes.slice(0, this.state.recipes.length).map((recipe, index) => {
                                return (
                                    <div class="col-lg-3 col-md-6 recipe-item">

                                        <div class="recipe-wrap">
                                            <figure>
                                                <img src={recipe.image} class="img-fluid" alt="" />

                                            </figure>

                                            <div class="recipe-info">
                                                <p className='recipe-title'><b>{recipe.title}</b></p>
                                                <div>Used ingredients:  {recipe.usedIngredientCount}</div>
                                                <div>Missed ingredients: {this.missedIngredients(this.state.ingredients, recipe.usedIngredientCount)}</div>
                                                <Link id={recipe.id} to="#" onClick={this.toggle}>View Recipe</Link>
                                                
                                            </div>
                                        </div>


                                    </div>
                                );
                            })}
                        </React.Fragment>
                    )
                    }

                </div>

            </React.Fragment>

        );
    };
};
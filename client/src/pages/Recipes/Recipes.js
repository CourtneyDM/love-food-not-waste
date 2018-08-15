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
            limit: 4,
            modal: false,
            recipe: [],
            ingredientList: [],
            steps: []
        }
        this.toggle = this.toggle.bind(this);
        this.showModal = this.showModal.bind(this);
        this.getFullRecipe = this.getFullRecipe.bind(this);

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

    getFullRecipe = (id) => {
        API.getFullRecipe(id)
           // .then(res=> console.log(res.data))
            .then(response => {
                if ( response.data.analyzedInstructions.length == 0) {
                    this.setState({ recipe: response.data, ingredientList: response.data.extendedIngredients})
                    
                } else {
                    
                    this.setState({ recipe: response.data, ingredientList: response.data.extendedIngredients, steps: response.data.analyzedInstructions[0].steps})
                }
              })
            
            .catch(error => { throw error });
    }

    showModal = (id) => {
        console.log("Recipe ID: " + id);
        this.getFullRecipe(id);
        this.toggle();
    }

 
    render() {
        return (


            <React.Fragment>
                <Modal className='modal-lg' isOpen={this.state.modal}>


                    <ModalHeader>{this.state.recipe.title}</ModalHeader>
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
                this.state.steps.length ==0 && (
                  <p><i>Instructions currently unavailable.  Please check the websites below.</i></p>
                )
              }
                        
                        <ol>
                { this.state.steps.map( ( item, index ) => ( <li key={ index }>{ item.step }</li> ) ) }
              </ol>
                       
                        <a href={ this.state.recipe.sourceUrl } target="_blank">Orignally posted by { this.state.recipe.sourceName }</a>
                        <br/>
                        <a href={ this.state.recipe.spoonacularSourceUrl } target="_blank">Obtained from Spoonacular</a>

                            </ModalBody>
                    <ModalFooter>

                        <Button text='Close' onClick={this.toggle} />
                    </ModalFooter>

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
                                                <p className='recipe-title block-with-text'><b>{recipe.title}</b></p>
                                                <div>Used ingredients:  {recipe.usedIngredientCount}</div>
                                                <div>Missed ingredients: {this.missedIngredients(this.state.ingredients, recipe.usedIngredientCount)}</div>
                                                <Button className='btn-view' text='View' onClick={() => this.showModal(recipe.id)}>{recipe.id}</Button>

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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, CardBasic } from '../../components/Card'
import API from '../../utils/API';
import './Recipes.css'

export class FullRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            id: '',
            recipe: [],
            ingredients:[],
            steps: []               
            }
        }
    

    componentDidMount() {
        const recipeId = localStorage.getItem('recipeId');
        this.getFullRecipe(recipeId);
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

    getFullRecipe = (id) => {
        API.getFullRecipe(id)
        //.then(res=> console.log(res.data.analyzedInstructions[0].steps))
            .then(res => this.setState({ recipe: res.data , ingredients: res.data.extendedIngredients, steps: res.data.analyzedInstructions[0].steps}))
            .catch(error => { throw error });
    }

 
    render() {

        
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header={this.state.recipe.title}>
                        <Link to="/AtHome/Recipes">
                            Back
                        </Link>
                       
                         <img src={this.state.recipe.image} className='fullRecipeImg' alt={`${this.state.recipe.title}`} />
                         <h6>Serving Size:{this.state.recipe.servings}</h6>
                         <h6>Ready in: {this.state.recipe.readyInMinutes} minutes</h6>
                         <br/>
                         <h6>Ingredients</h6>
                         <ul>
                         { this.state.ingredients.map((item) => (<li className='bullets' key={item.id}>{item.originalString}</li>)) }
                         </ul>
                         <br/>
                         <h6>Instructions</h6>
                         <ol>
                         { this.state.steps.map((item,index) => (<li key={index}>{item.step}</li>)) }
</ol>
                         <a href={this.state.recipe.sourceUrl} target='_blank'>Orignally posted by {this.state.recipe.sourceName}</a>
                         <a href={this.state.recipe.spoonacularSourceUrl} target='_blank'>Obtained from Spoonacular</a>


                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};
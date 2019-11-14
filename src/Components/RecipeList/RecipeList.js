import React, {Component} from 'react';
import './RecipeList.css'

class RecipeList extends Component {

    getListItems() {
        return this.props.recipes.map((recipe) => 
            <li key={recipe.idMeal}> 
                <h1 className='meal'>{recipe.strMeal}</h1>
                <h2 className='country'>{recipe.strArea}</h2>
                <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <a className='youtube' href={recipe.strYoutube} target="_blank">Youtube Instructions</a>
                <p>{recipe.strInstructions}</p>
                <ul>
                    {this.getIngredientsList(recipe)}
                </ul>
            </li>

        );
    }

    getIngredientsList(recipe) {
        let output = [];
        
        for(var i = 1; i <= 20; i++) {
            const ingredientIdentifier = 'strIngredient' + i;
            const amountIdentifier = 'strMeasure' + i;
            if (recipe[ingredientIdentifier] !== '' && recipe [ingredientIdentifier] !== null) {
            output.push(<li key={i}>{recipe[ingredientIdentifier]}: {recipe[amountIdentifier]}</li>);
            }
        }

        return output;
    }

    render() {
        if (this.props.recipes.length > 0) {
            return(
                <ul>{this.getListItems()}</ul>
            );

        }else {
            return (
                <h1>No recipe were found. Please try different letter or keyword</h1>
            );
        }
    }
}

export default RecipeList;
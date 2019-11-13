import React, {Component} from 'react';
import axios from 'axios';
import RecipeList from '../RecipeList/RecipeList';
import Header from '../Header/Header';
import './RecipeSearcher.css'

class RecipeSearcher extends Component {

    constructor(props) {
        super(props);

        this.state = {recipes: [] }
        
    }

    componentDidMount() {
        this.getRandomRecipe();
    }

    getRandomRecipe = () => {

        const _this = this;

       axios({
           /* We can configure everything we need to about the HTTP request in here */ 
           method:'GET',
           url: 'https://www.themealdb.com/api/json/v1/1/random.php',
       }) 
       .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] })
       })
       .catch(function(error) {
            console.log(error);
            
       })
    }

    getRecipeByName = (name) => {

        const _this = this;

        axios({
            method:'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params:{
                s:name           
            }
        })
        .then(function(response){
            _this.setState({ recipes: response.data.meals || [] })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    getRecipeByLetter = (letter) => {

        const _this = this;

        axios ({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params:{
                f:letter
            }
        })
        .then(function(response){
            _this.setState({ recipes: response.data.meals || [] })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render() {

        return (
            <div>
                <Header 
                    randomRecipeHandler={this.getRandomRecipe}
                    recipeByLetterHandler={this.getRecipeByLetter}
                    recipeByNameHandler={this.getRecipeByName}
                />
               <RecipeList recipes={this.state.recipes}/>
               <a className='apiWebsite'href='https://www.themealdb.com/' target='_blank'>TheMealHB.com</a>
            </div>
        );
    }
}

export default RecipeSearcher;
import React, {Component} from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    constructor(props) {
        super(props);

        this.state = {recipes: [] }
        
    }


    getRandomRecipe = () => {
       axios({
           /* We can configure everything we need to about the HTTP request in here */ 
           method:'GET',
           url: 'https://www.themealdb.com/api/json/v1/1/random.php',
       }) 
       .then(function(response) {
           console.log(response);
       })
       .catch(function(error) {
            console.log(error);
            
       })
    }

    getRecipeByName = (name) => {
        axios({
            method:'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params:{
                s:name           
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    getRecipeByLetter = (letter) => {
        axios ({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params:{
                f:letter
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render() {

        return (
            <div>
                <h1>Hello</h1>
                <h2>how was your day</h2>
            </div>
        );
    }
}

export default RecipeSearcher;
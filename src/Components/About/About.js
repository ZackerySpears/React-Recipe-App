import React, {Component} from 'react';
import './About.css';



class About extends Component {
    render() {
        return (
            <div>
                <h1 className='aboutH1'>About</h1>
                <p className='aboutP'>This app was created using the free recipe datebase at <a className='apiWebsite' rel='noreferrer' target='_blank' href='https://www.themealdb.com/api.php'>The Meal DB</a>.</p>
                <img className='aboutImage' src={require('../IMG/food.png')}></img>
            </div>
            
        );
    }
}

export default About;
import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    constructor(props) {
        super(props);
    this.state = { textFieldValue: '' }


    /* Binds the value of 'this' in the current context as the 'this' inside of the handleChange function */

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({textFieldValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.recipeByNameHandler(this.state.textFieldValue);
        this.setState({textFieldValue: ''});
    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button className='letterButtons' key={letter} onClick={() => this.props.recipeByLetterHandler(letter)}>
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <div className='header'>
                <h2 className='title'>Recipe Finder</h2>
                <p className='getFoodTitle'>Get Recipe By Letter</p>
                {this.generateLetterButtons()}
                <p className='getFoodTitle'>Get Recipes By Keyword</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.textFieldValue} onChange= {this.handleChange} />
                    <input className='enter' type='submit' value='Enter'/>
                </form>
                <p className='getFoodTitle'>Get Random Recipe</p>
                <button className='randomButton' onClick={() => this.props.randomRecipeHandler()}>?</button>
            </div>
        );
    }
}

export default Header;
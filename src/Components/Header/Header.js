import React, {Component} from 'react';

class Header extends Component {
    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button>
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <div>
                <h2>Recipe Finder</h2>
                <p>Get Recipe By Letter</p>
                {this.generateLetterButtons()}
                <p>Get Recipes By Keyword</p>
                <form>
                    <input type='text' />
                    <input type='submit' value='Submit' />
                </form>
                <p>Get Random Recipe</p>
                <button>Submit</button>
            </div>
        );
    }
}

export default Header;
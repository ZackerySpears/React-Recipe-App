import React from 'react';
import './App.css'
import RecipeSeacher from './Components/RecipeSearcher/RecipeSearcher';
import About from './Components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className='links' to='/'>Home</Link>
          </li>
          <li>
            <Link className='links' to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      {/* The Switch component looks through the Route components inside of it and renders the first on that matches the current URL */}
      <Switch>
        <Route exact path='/'>
          <RecipeSeacher />
        </Route>

        <Route  path='/about'>
          <About  />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

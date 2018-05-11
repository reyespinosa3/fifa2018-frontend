import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FifaGamesContainer from '../containers/FifaGamesContainer';
import Fifa2014Details from './Fifa2014Details';
import Fifa2018Details from './Fifa2018Details';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <nav className="Nav-links">
          <Link to='/'>Home</Link>
          <Link to='/2014'>FIFA 2014 Details</Link>
          <Link to='/2018'>FIFA 2018 Details</Link>
        </nav>

        <div>
          <Route exact path='/' component={FifaGamesContainer} />
          <Route path='/2014' component={Fifa2014Details} />
          <Route path='/2018' component={Fifa2018Details} />
        </div>

      </div>
      </Router>
    );
  }
}

export default App;

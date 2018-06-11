import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FifaGamesContainer from '../containers/FifaGamesContainer';
import Fifa2014Details from './2014/Fifa2014Details';
import Fifa2018Details from './2018/Fifa2018Details';
import Fifa2018Stadiums from './2018/Fifa2018Stadiums';
import Fifa2018Player from './2018/Fifa2018Player';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <nav className="Nav-links">
          <NavLink exact to='/' activeClassName="Selected">Home</NavLink>
          <NavLink to='/2014' activeClassName="Selected">FIFA 2014 Details</NavLink>
          <NavLink to='/2018' activeClassName="Selected">FIFA 2018 Details</NavLink>
          <NavLink to='/Stadiums' activeClassName="Selected">Stadiums</NavLink>
          <NavLink to='/AddPlayer' activeClassName="Selected">Add Player</NavLink>
        </nav>

        <div>
          <Route exact path='/' component={FifaGamesContainer} />
          <Route path='/2014' component={Fifa2014Details} />
          <Route path='/2018' component={Fifa2018Details} />
          <Route path='/Stadiums' component={Fifa2018Stadiums} />
          <Route path='/Addplayer' component={Fifa2018Player} />
        </div>

      </div>
      </Router>
    );
  }
}

export default App;

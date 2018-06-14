import React, { Component } from 'react';
import './Fifa2018Player.css';
import FifaFooter from '../FifaFooter';
import axios from 'axios';

class Fifa2018Player extends Component {

  state = {
    player:"",
    playerarray: []
  }

  handleChange = event => {
    this.setState({ player: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.player);
    this.state.playerarray.push(this.state.player);
    console.log(this.state.playerarray);
  }


  render() {
    return (
      <div className="FifaPlayer">

        <div>
          <h2>Got a Favorite Player?</h2>
          <h2>Add Their Name Below</h2>
        </div>
        <div>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Player Name
            <input type='text' name='player' onChange={ this.handleChange} />
          </label>
            <button type='submit'>Submit</button>
          </form>
        </div>

        <div>
          <h2>{ this.state.playerarray }</h2>
        </div>

        <div>
          <FifaFooter />
        </div>

      </div>
    );
  }
}

export default Fifa2018Player;

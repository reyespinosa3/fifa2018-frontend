import React, { Component } from 'react';
import './Fifa2018Player.css';
import FifaFooter from '../FifaFooter';

class Fifa2018Player extends Component {
  render() {
    return (
      <div className="FifaPlayer">

        <div>
          <h2>Coming Soon</h2>
          <h2>Add Your Favorite Player</h2>
        </div>
        <div>
          <form>
            <input type='text' placeholder='Country'></input>
            <input type='text' placeholder='Player'></input>
            <button type='submit'>Submit</button>
          </form>
        </div>

        <div>
          <FifaFooter />
        </div>

      </div>
    );
  }
}

export default Fifa2018Player;

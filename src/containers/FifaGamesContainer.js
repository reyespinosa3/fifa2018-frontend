import React, { Component } from 'react';
import './FifaGamesContainer.css';
import FifaCarousel from '../components/FifaCarousel';
import Fifa2014 from '../components/Fifa2014';
import Fifa2018 from '../components/Fifa2018';


class FifaGamesContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <FifaCarousel />
        </div>
        <div className="FifaGamesContainer">
          <Fifa2014 />
          <Fifa2018 />
        </div>
      </div>
    );
  }
}

export default FifaGamesContainer;

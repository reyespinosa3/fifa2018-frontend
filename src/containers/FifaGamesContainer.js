import React, { Component } from 'react';
import './FifaGamesContainer.css';
import FifaCarousel from '../components/FifaCarousel';
import Fifa2014 from '../components/2014/Fifa2014';
import Fifa2018 from '../components/2018/Fifa2018';
import FifaFooter from '../components/FifaFooter';


class FifaGamesContainer extends Component {
  render() {
    return (
      <div className="Main-div2">
        <div>
          <FifaCarousel />
        </div>
        <div className="FifaGamesContainer">
          <Fifa2014 />
          <Fifa2018 />
        </div>
        <FifaFooter />
      </div>
    );
  }
}

export default FifaGamesContainer;

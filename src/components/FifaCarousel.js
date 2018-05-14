import React, { Component } from 'react';
import './FifaCarousel.css';
import fifa2014brazil from './images/fifa2014brazil.png';
import fifa2018russia from './images/fifa2018russia.png';


class FifaCarousel extends Component {

  render() {
    return (
      <div className="Fifa-Carousel">

        <img src={fifa2014brazil}></img>
        <img src={fifa2018russia}></img>

      </div>
    );
  }
}

export default FifaCarousel;

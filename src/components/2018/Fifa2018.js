import React, { Component } from 'react';
import './Fifa2018.css';

class Fifa2018 extends Component {
  render() {
    return (
      <div className="Fifa2018">
        <h2>Get a preview of the FIFA 2018 World Cup</h2>
        <h2>by clicking on the FIFA 2018 DETAILS link above</h2>
        <h2>use the link below to navigate to the</h2>
        <h2>
        <a href="http://www.fifa.com/worldcup/" target="_blank" rel="noopener noreferrer">OFFICIAL FIFA.com</a>
        </h2>
        <h2>Or watch this 4 minute preview</h2>
        <div>
          <iframe title="2018vid" width="400" height="250" src="https://www.youtube.com/embed/G7Y1M2532BI"
          frameBorder="15" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default Fifa2018;

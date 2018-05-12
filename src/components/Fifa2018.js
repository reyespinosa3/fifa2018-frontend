import React, { Component } from 'react';
import './Fifa2018.css';

class Fifa2018 extends Component {
  render() {
    return (
      <div className="Fifa2018">
        <h4>Get a preview of the FIFA 2018 World Cup</h4>
        <h4>by clicking on the FIFA 2018 DETAILS link above</h4>
        <h4>Or use the link below to navigate to the</h4>
        <h4>OFFICIAL FIFA.COM website</h4>
        <a href="http://www.fifa.com/worldcup/" target="_blank" rel="noopener noreferrer">FIFA.com</a>

        <div>
          <iframe title="2018vid" width="400" height="250" src="https://www.youtube.com/embed/6QsIvzS4_ws"
          frameBorder="15" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default Fifa2018;

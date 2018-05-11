import React, { Component } from 'react';
import './Fifa2014.css';

class Fifa2014 extends Component {
  render() {
    return (
      <div className="Fifa2014">
        <h4>FIFA 2014 World Cup</h4>
        <h5>Tournament Winner was Germany</h5>
        <h5>Germany beat Argentina in extra time. 1-0</h5>
        <h5>Below is a 5 minute video showing all the goals scored</h5>
        <h5>in the 2014 FIFA World Cup in Brazil</h5>
        <iframe width="400" height="250" title="2014Goals"
          src="https://www.youtube.com/embed/DjvKaJdfEDg"
          frameBorder="0" allow="autoplay; encrypted-media"
          allowFullScreen></iframe>
      </div>
    );
  }
}

export default Fifa2014;

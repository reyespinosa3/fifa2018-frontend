import React, { Component } from 'react';
import './Fifa2014.css';

class Fifa2014 extends Component {
  render() {
    return (
      <div className="Fifa2014">
        <h2>FIFA 2014 World Cup Winner Germany</h2>
        <h2>Germany beat Argentina in extra time. 1-0</h2>
        <h2>For more details click the "FIFA 2014 Details" link above</h2>
        <h2>Or watch this 9 minute video showing all the goals scored</h2>
        <h2>in the 2014 FIFA World Cup in Brazil</h2>
        <iframe width="400" height="250" title="2014Goals"
          src="https://www.youtube.com/embed/Bef16eykyKU"
          frameBorder="15" allow="autoplay; encrypted-media"
          allowFullScreen></iframe>
      </div>
    );
  }
}

export default Fifa2014;

import React, { Component } from 'react';
import './Fifa2014.css';

class Fifa2014 extends Component {
  render() {
    return (
      <div className="Fifa2014">
        <h4>FIFA 2014 World Cup Winner Germany</h4>
        <h4>Germany beat Argentina in extra time. 1-0</h4>
        <h4>For more details click the "FIFA 2014 Details" link above</h4>
        <h5>Or watch this 5 minute video showing all the goals scored</h5>
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

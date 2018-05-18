import React, { Component } from 'react';
import './Fifa2014Details.css';
import fifa2014results from '../images/fifa2014results.png';
import fifa2014brazillogo from '../images/fifa2014brazillogo.png';
import FifaFooter from '../FifaFooter';

class Fifa2014Details extends Component {
  render() {
    return (
      <div className="Main-div1">

        <div className="Logos">
          <img src={fifa2014brazillogo} alt="fifa 2014 logo"></img>
        </div>

        <h4>Click the links below to view details about the FIFA 2014 World Cup Tournament held in Bazil</h4>
        <h4>Links will take you to the OFFICIAL FIFA.com site and open in a new window</h4>

        <div className="links">
          <a className="a-links" href="http://www.fifa.com/worldcup/archive/brazil2014/matches/index.html"
          target="_blank" rel="noopener noreferrer">All 2014 Matches</a>
          <a className="a-links" href="http://www.fifa.com/worldcup/archive/brazil2014/teams/index.html"
          target="_blank" rel="noopener noreferrer">All 2014 Teams</a>
          <a className="a-links" href="http://www.fifa.com/worldcup/archive/brazil2014/groups/index.html"
          target="_blank" rel="noopener noreferrer">All 2014 Groups</a>
          <a className="a-links" href="http://www.fifa.com/worldcup/archive/brazil2014/awards/index.html"
          target="_blank" rel="noopener noreferrer">All 2014 Awards</a>
          <a className="a-links" href="http://www.fifa.com/worldcup/archive/brazil2014/statistics/index.html"
          target="_blank" rel="noopener noreferrer">All 2014 Statistics</a>
        </div>

        <div className="image">
          <img id="results" src={fifa2014results} alt="fifa 2014 winners"></img>
        </div>
        <FifaFooter />
      </div>
    );
  }
}

export default Fifa2014Details;

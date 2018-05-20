import React, { Component } from 'react';
import './Fifa2018Stadiums.css';
import FifaFooter from '../FifaFooter';


class Fifa2018Stadiums extends Component {

  render() {
    return (
      <div className="Fifa2018Stadiums">

        <div>
          <h1>Fifa Stadiums</h1>
          <h2>City: Saint Petersburg --> Saint Petersburg Stadium</h2><br></br>
          <h2>City: Ekaterinburg --> Ekaterinburg Arena</h2><br></br>
          <h2>City: Nizhny Novgorod --> Nizhny Novgorod Stadium</h2><br></br>
          <h2>City: Kazan --> Kazan Arena</h2><br></br>
          <h2>City: Moscow --> Spartak Stadium</h2><br></br>
          <h2>City: Kaliningrad --> Kaliningrad Stadium</h2><br></br>
          <h2>City: Saransk --> Mordovia Arena</h2><br></br>
          <h2>City: Samara --> Samara Arena</h2><br></br>
          <h2>City: Volgograd --> Volgograd Arena</h2><br></br>
          <h2>City: Rostov-On-Don --> Rostov Arena</h2><br></br>
          <h2>City: Sochi -->  Fisht Stadium</h2><br></br>
        </div>

        <div>
          <FifaFooter />
        </div>

      </div>
    );
  }
}

export default Fifa2018Stadiums;

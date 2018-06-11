import React, { Component } from 'react';
import './Fifa2018Stadiums.css';
import FifaFooter from '../FifaFooter';


class Fifa2018Stadiums extends Component {

  render() {
    return (
      <div className="Fifa2018Stadiums">

        <div>
          <h1>Fifa Stadiums</h1>
          <h4>City: Saint Petersburg --> Saint Petersburg Stadium</h4><br></br>
          <h4>City: Ekaterinburg --> Ekaterinburg Arena</h4><br></br>
          <h4>City: Nizhny Novgorod --> Nizhny Novgorod Stadium</h4><br></br>
          <h4>City: Kazan --> Kazan Arena</h4><br></br>
          <h4>City: Moscow --> Spartak Stadium</h4><br></br>
          <h4>City: Kaliningrad --> Kaliningrad Stadium</h4><br></br>
          <h4>City: Saransk --> Mordovia Arena</h4><br></br>
          <h4>City: Samara --> Samara Arena</h4><br></br>
          <h4>City: Volgograd --> Volgograd Arena</h4><br></br>
          <h4>City: Rostov-On-Don --> Rostov Arena</h4><br></br>
          <h4>City: Sochi -->  Fisht Stadium</h4><br></br>
        </div>

        <div>
          <FifaFooter />
        </div>

      </div>
    );
  }
}

export default Fifa2018Stadiums;

import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(){
    super()
      this.state = {
        days: "00",
        hours: "00",
        minutes: "00"
      }


  }

    render() {

      setInterval(function() {
        let countTime = new Date('2018-06-14 11:00:00');
        let timeNow = Date.now();
        let timeDiff = Math.abs(timeNow - countTime)/1000;

        let daysLeft = Math.floor(timeDiff/86400);
        timeDiff -= daysLeft * 86400;

        let hoursLeft = Math.floor(timeDiff/3600) % 24;
        timeDiff -= hoursLeft * 3600;

        let minutesLeft = Math.floor(timeDiff/60) % 60;

        console.log(daysLeft);
        console.log(hoursLeft);
        console.log(minutesLeft);
      }, 15000);

    return (
      <div className='App'>
        <h1>Countdown to FIFA 2018 World Cup</h1>
        <h1>Host Nation: Russia</h1>
          <div className='Countdown-div'>
            <h1>Days: {this.state.days}</h1>
            <h1>Hours: {this.state.hours}</h1>
            <h1>Minutes: {this.state.minutes}</h1>
          </div>
        <h1>Until first kick-off</h1>
      </div>
    );
  }
}

export default Header;

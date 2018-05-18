import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(){
    super()
      this.state = {
        days: "00",
        hours: "00",
        minutes: "00",
        interval: "00"
      }
  }

  componentWillMount() {
    let kickOffTime = new Date('2018-06-14 10:00:00');
    let timeNow = Date.now();
    let timeDiff = Math.abs(timeNow - kickOffTime)/1000;
    let diff = Math.abs(timeNow - kickOffTime)/1000;
    let daysLeft = Math.floor(timeDiff/86400);
    timeDiff -= daysLeft * 86400;
    let hoursLeft = Math.floor(timeDiff/3600) % 24;
    timeDiff -= hoursLeft * 3600;
    let minutesLeft = Math.floor(timeDiff/60) % 60;
    timeDiff -= minutesLeft * 60;
    let secondsLeft = Math.floor(timeDiff);
    this.setState({
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
      interval: diff
    })
  }

  minusOne() {
  if(this.state.interval > 0){
    let kickOffTime = new Date('2018-06-14 10:00:00');
    let timeNow = Date.now();
    let timeDiff = Math.abs(timeNow - kickOffTime)/1000;
    let daysLeft = Math.floor(timeDiff/86400);
    timeDiff -= daysLeft * 86400;
    let hoursLeft = Math.floor(timeDiff/3600) % 24;
    timeDiff -= hoursLeft * 3600;
    let minutesLeft = Math.floor(timeDiff/60) % 60;
    timeDiff -= minutesLeft * 60;
    let secondsLeft = Math.floor(timeDiff);
    this.setState({
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft
    })
  }
}

componentDidMount(){
  setInterval(() => this.minusOne(), 1000);
}

    render() {

    return (
      <div>
        <div className='App-header'>
          <h1>Countdown to FIFA 2018 World Cup</h1>
          <h3>Host Nation: Russia</h3>
          <h3>Time until first kick-off</h3>
        </div>

            <div className='Countdown-div'>
              <h3>Days: {this.state.days}</h3>
              <h3>Hours: {this.state.hours}</h3>
              <h3>Minutes: {this.state.minutes}</h3>
              <h3>Seconds: {this.state.seconds}</h3>
            </div>
      </div>
    );
  }
}

export default Header;

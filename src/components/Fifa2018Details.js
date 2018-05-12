import React, { Component } from 'react';
import FifaFooter from './FifaFooter';
import axios from 'axios';

class Fifa2018Details extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    axios.get(`//localhost:8080/api/teams`)
      .then(res => {
        console.log(res);
        const teams = res.data;
        this.setState({ teams });
      })
  }

  render() {
    return (
      <div>
        <h3>Show me Somthing 2018!</h3>
          <ul>
            { this.state.teams.map(teams =><li> {teams.country}</li>)}
          </ul>
        <FifaFooter />
      </div>
    );
  }
}

export default Fifa2018Details;

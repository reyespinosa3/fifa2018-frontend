import React, { Component } from 'react';
import axios from 'axios';
import './Fifa2018Groups.css';

export class Fifa2018AddPlayer extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    axios.get(`//localhost:8080/api/teams`)
      .then(res => {
        const teams = res.data;
        this.setState({ teams });
      })
  }

  render() {
    let pastWinners = [];
    let totalWins = [];

    let regionteams = this.state.teams.map(function(item, key) {
      if (item.titles > 0) {
        pastWinners.push(item.country);
        totalWins.push(item.titles);
      }
    })
    return (
      <div>
        <h1>Past Tournament Winners</h1>
        <div  className="Groups-div">
        <table border='1' cellSpacing='15' cellPadding='15'>
          <tbody>
            <tr>
              <td> {pastWinners[0]} </td>
              <td> {pastWinners[1]} </td>
              <td> {pastWinners[2]} </td>
              <td> {pastWinners[3]} </td>
              <td> {pastWinners[4]} </td>
              <td> {pastWinners[5]} </td>
              <td> {pastWinners[6]} </td>
              <td> Italy </td>
            </tr>
            <tr>
              <td> {totalWins[0]} </td>
              <td> {totalWins[1]} </td>
              <td> {totalWins[2]} </td>
              <td> {totalWins[3]} </td>
              <td> {totalWins[4]} </td>
              <td> {totalWins[5]} </td>
              <td> {totalWins[6]} </td>
              <td> 4 </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}


export default Fifa2018AddPlayer;

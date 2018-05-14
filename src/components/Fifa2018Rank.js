import React, { Component } from 'react';
import axios from 'axios';
import './Fifa2018Groups.css';

class Fifa2018Rank extends Component {
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
        <h1> Teams by FIFA Rank </h1>
        <div className="Groups-div">
        <table border='1'>
          <tbody>
            <tr className="Groups-header">Country and Rank</tr>
            <tr>
              {this.state.teams.map((data, key) => (
                  <tr>{data.country}<td>{data.rank}</td></tr>
              ))}
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Fifa2018Rank;

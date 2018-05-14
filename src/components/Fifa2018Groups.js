import React, { Component } from 'react';
import axios from 'axios';
import './Fifa2018Groups.css';


class Fifa2018Groups extends Component {
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

    let groupA = [];
    let groupB = [];
    let groupC = [];
    let groupD = [];
    let groupE = [];
    let groupF = [];
    let groupG = [];
    let groupH = [];


    let allteams = this.state.teams.map(function(item, key) {
      if (item.group === "A") {
        groupA.push(item.country);
      }
      if (item.group === "B") {
        groupB.push(item.country);
      }
      if (item.group === "C") {
        groupC.push(item.country);
      }
      if (item.group === "D") {
        groupD.push(item.country);
      }
      if (item.group === "E") {
        groupE.push(item.country);
      }
      if (item.group === "F") {
        groupF.push(item.country);
      }
      if (item.group === "G") {
        groupG.push(item.country);
      }
      if (item.group === "H") {
        groupH.push(item.country);
      }
    });

    return (
      <div>
        <h1>Teams By Groups</h1>
        <div className="Groups-div">
          <table border='1' cellSpacing='5' cellPadding='15'>
            <tbody>
              <tr>
                <th className="Groups-header">Group A</th>
                <th className="Groups-header">Group B</th>
                <th className="Groups-header">Group C</th>
                <th className="Groups-header">Group D</th>
                <th className="Groups-header">Group E</th>
                <th className="Groups-header">Group F</th>
                <th className="Groups-header">Group G</th>
                <th className="Groups-header">Group H</th>
              </tr>
              <tr>
                <td> {groupA[0]} </td>
                <td> {groupB[0]} </td>
                <td> {groupC[0]} </td>
                <td> {groupD[0]} </td>
                <td> {groupE[0]} </td>
                <td> {groupF[0]} </td>
                <td> {groupG[0]} </td>
                <td> {groupH[0]} </td>
              </tr>
              <tr>
                <td> {groupA[1]} </td>
                <td> {groupB[1]} </td>
                <td> {groupC[1]} </td>
                <td> {groupD[1]} </td>
                <td> {groupE[1]} </td>
                <td> {groupF[1]} </td>
                <td> {groupG[1]} </td>
                <td> {groupH[1]} </td>
              </tr>
              <tr>
                <td> {groupA[2]} </td>
                <td> {groupB[2]} </td>
                <td> {groupC[2]} </td>
                <td> {groupD[2]} </td>
                <td> {groupE[2]} </td>
                <td> {groupF[2]} </td>
                <td> {groupG[2]} </td>
                <td> {groupH[2]} </td>
              </tr>
              <tr>
                <td> {groupA[3]} </td>
                <td> {groupB[3]} </td>
                <td> {groupC[3]} </td>
                <td> {groupD[3]} </td>
                <td> {groupE[3]} </td>
                <td> {groupF[3]} </td>
                <td> {groupG[3]} </td>
                <td> {groupH[3]} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Fifa2018Groups;

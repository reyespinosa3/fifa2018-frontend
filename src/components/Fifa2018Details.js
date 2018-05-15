import React, { Component } from 'react';
import './Fifa2018Details.css';
import Fifa2018PastWinners from './Fifa2018PastWinners';
import FifaFooter from './FifaFooter';
import Fifa2018Groups from './Fifa2018Groups';
import axios from 'axios';
import fifa2018russialogo from './images/fifa2018russialogo.png';
import fifa2018russia from './images/fifa2018russia.png';

class Fifa2018Details extends Component {
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

    let africa = [];
    let asia = [];
    let europe = [];
    let cAmerica = [];
    let sAmerica = [];

    let regionteams = this.state.teams.map(function(item, key) {
      if (item.region === "Africa") {
        africa.push(item.country);
      }
      if (item.region === "Asia") {
        asia.push(item.country);
      }
      if (item.region === "Europe") {
        europe.push(item.country);
      }
      if (item.region === "Central America") {
        cAmerica.push(item.country);
      }
      if (item.region === "South America") {
        sAmerica.push(item.country);
      }
    })


    return (
      <div>
        <div className="fifa2018images">
          <img src={fifa2018russialogo}></img>
          <img src={fifa2018russia}></img>
        </div>
        <h1>Teams By Region</h1>
        <div className="Details-div">

            <table border='1' cellSpacing='15' cellPadding='15'>
              <tbody>
                <tr>
                  <th className="Details-header">Europe</th>
                  <th className="Details-header">Africa</th>
                  <th className="Details-header">Asia</th>
                  <th className="Details-header">South America</th>
                  <th className="Details-header">Central America</th>
                </tr>
                <tr>
                  <td> {europe[0]} </td>
                  <td> {africa[0]} </td>
                  <td> {asia[0]} </td>
                  <td> {sAmerica[0]} </td>
                  <td> {cAmerica[0]} </td>
                </tr>
                <tr>
                  <td> {europe[1]} </td>
                  <td> {africa[1]} </td>
                  <td> {asia[1]} </td>
                  <td> {sAmerica[1]} </td>
                  <td> {cAmerica[1]} </td>
                </tr>
                <tr>
                  <td> {europe[2]} </td>
                  <td> {africa[2]} </td>
                  <td> {asia[2]} </td>
                  <td> {sAmerica[2]} </td>
                  <td> {cAmerica[2]} </td>
                </tr>
                <tr>
                    <td> {europe[3]} </td>
                    <td> {africa[3]} </td>
                    <td> {asia[3]} </td>
                    <td> {sAmerica[3]} </td>
                </tr>
                <tr>
                    <td> {europe[4]} </td>
                    <td> {africa[4]} </td>
                    <td> {asia[4]} </td>
                    <td> {sAmerica[4]} </td>
                </tr>
                <tr>
                    <td> {europe[5]} </td>
                </tr>
                <tr>
                    <td> {europe[6]} </td>
                </tr>
                <tr>
                    <td> {europe[7]} </td>
                </tr>
                <tr>
                    <td> {europe[8]} </td>
                </tr>
                <tr>
                    <td> {europe[9]} </td>
                </tr>
                <tr>
                    <td> {europe[10]} </td>
                </tr>
                <tr>
                    <td> {europe[11]} </td>
                </tr>
                <tr>
                    <td> {europe[12]} </td>
                </tr>
                <tr>
                    <td> {europe[13]} </td>
                </tr>
              </tbody>
            </table>
        </div>
          <Fifa2018Groups />
          <Fifa2018PastWinners />
          <FifaFooter />
      </div>
    );
  }
}

export default Fifa2018Details;

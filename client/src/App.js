import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: "initial state"};
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/planes")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
  }
  
  
  render() {
    return (
      <div>
        <h1>Add new Airplane to databse</h1>
        <form>
          <label htmlFor="registration">Registration</label>
          <br/>
          <input placeholder="xa-abc" name="registration" type="text" id="registation"  required/>
          
          <br />
          <label htmlFor="maxTaxiWeight">Maximum Taxi Weight (mtw)</label>
          <br/>
          <input min="8000" placeholder="73900" name="maxTaxiWeight" type="number" id="maxTaxiWeight" required/>
          
          <br />
          <label htmlFor="maxTakeoffWeight">Maximum Takeoff Weight (mtow)</label>
          <br/>
          <input placeholder="73500" name="maxTakeoffWeight" type="number" id="maxTakeoffWeight" required/>

          <br />
          <label htmlFor="maxLandingWeight">Maximum Landing Weight (mlw)</label>
          <br/>
          <input placeholder="64000" name="maxLandingWeight" type="number" id="maxLandingWeight" required/>

          <br />
          <label htmlFor="maxZerofuelWeight">Maximum ZeroFuel Weight (mzfw)</label>
          <br/>
          <input placeholder="61000" name="maxZerofuelWeight" type="number" id="maxZerofuelWeight" required/>

          <br />
          <label htmlFor="operationalEmptyWeight">Operational Empty Weight (oew)</label>
          <br/>
          <input placeholder="43003" name="operationalEmptyWeight" type="number" id="operationalEmptyWeight" required/>

          <br />
          <label htmlFor="originalCenterOfGravity">Empty center of gravity (c.g %)</label>
          <br/>
          <input placeholder="25.6%" name="originalCenterOfGravity" type="number" id="originalCenterOfGravity" required/>

          <br />
          <label htmlFor="ui">Index unit (u.i)</label>
          <br/>
          <input placeholder="41.2" name="ui" type="number" id="ui" required/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  } 
}
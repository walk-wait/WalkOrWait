import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import './style.css'

class Departure extends Component {
  
  render() {
    return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <button className="btn search" type="button" onClick={(e) => this.props.geolocate(e)}><MDBIcon far icon="dot-circle" /></button>
        </div>
        <select className="custom-select" id="" onChange={(e) => this.props.handleChange(e)}>
            <option defaultValue>Start...</option>
            {this.props.departOptions.map(option =>
              <option key={`${option.route},${option.id}`} value={option.id} data-route={option.route}>{option.title}</option>
            )}
        </select>
    </div>
    );
  }
}

export default Departure;
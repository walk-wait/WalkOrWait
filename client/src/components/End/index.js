import React, { Component } from "react";

class Arrival extends Component {
  render() {
    return (
    <div className="input-group mb-3">
        <select className="custom-select" id="" onChange={(e) => this.props.handleChange(e)}>
            <option defaultValue>Arrive...</option>
            {this.props.arrivalOptions.map(option =>
              <option key={`${option.route},${option.id}`} value={option.id} data-route={option.route}>{option.route} - {option.title}</option>
            )}
        </select>
    </div>
    );
  }
}

export default Arrival;
import React, { Component } from "react";

class Arrival extends Component {
    constructor (props) {
        super(props)
        this.state = {
            options : [
                {value : "Bus 1"},
                {value : "Bus 2"},
                {value : "Bus 3"},
            ]
        }
    }
  
  render() {
    return (
    <div className="input-group mb-3">
        <select className="custom-select" id="" >
            <option defaultValue>Arrive...</option>
            {this.state.options.map(option =>
              <option key={`${option.value}`} value={option.value}>{option.value}</option>
            )}
        </select>
    </div>
    );
  }
}

export default Arrival;
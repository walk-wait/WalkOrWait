import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, } from 'mdbreact';
import Start from '../../components/Start'
import End from '../../components/End'
import API from '../../utils/API'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: "",
      longitude: "",
      departOptions: [],
      arrivalOptions: [],
      depart: {},
      arrival: {}
    };
  }

  geolocate = (e) => {
    e.preventDefault()
    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        let {latitude, longitude} = this.state
        this.getBusAtLocation(latitude, longitude)
      })
    }else {
      console.log("geolocation is NOT available")
    }
  }

  getBusAtLocation = (lat, lon) => {
    API.getAllBuses(lat, lon)
    .then(res => {
      let buses = res.data
      let departOptions = []
      buses.forEach(bus => {
        let thisBus = {}
        thisBus.route = bus.route.id
        thisBus.id = bus.stop.id
        let fullTitle = bus.values[0].direction.title.split("To: ")[1]
        let direction = fullTitle.split(" - ")[0].charAt(0)
        let title = fullTitle.split(" - ")[1].split(" ")[1]
        let stop = bus.stop.title.split(" ").slice(1).join(" ")
        thisBus.title = bus.route.id + direction + " - " + title + " / " + stop
        departOptions.push(thisBus)
      });
      this.setState({departOptions})
    })
  }

  handleDepartInput = async (e) => {
    e.preventDefault()
    let index = e.target.selectedIndex
    let selectedBus = e.target.childNodes[index]
    let depart = {
      route: selectedBus.getAttribute('data-route'),
      stopId: e.target.value,
    }
    await this.setState({depart})
    this.listDestinations()

  }

  listDestinations = () => {
    let {route, stopId} = this.state.depart
    API.getNextStops(route, stopId)
      .then(res => {
      this.setState({arrivalOptions: res.data})
      })
  }

  handleDestinationInput = (e) => {
    e.preventDefault()
    console.log(e.target)
    let index = e.target.selectedIndex
    let selectedBus = e.target.childNodes[index]
    let arrival = {
      route: selectedBus.getAttribute('data-route'),
      stopId: e.target.value,
    }
    console.log(arrival)
    this.setState({arrival})
    console.log(this.state.arrival)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let route = parseInt(this.state.depart.route)
    let origin = this.state.depart.stopId
    let destination = this.state.arrival.stopId
    API.search(route, origin, destination)
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    return(
      <MDBContainer className="text-center mt-5 pt-5">
        <form>
          <MDBRow className="row justify-content-center">
              <MDBCol md="4" sm="12">
                  <Start departOptions={this.state.departOptions} geolocate={this.geolocate} latitude={this.state.latitude} longitude={this.state.longitude} handleChange={this.handleDepartInput}/>
              </MDBCol>
              <MDBCol md="4" sm="12">
                  <End arrivalOptions={this.state.arrivalOptions} handleChange={this.handleDestinationInput}/> 
              </MDBCol>
              <MDBCol md="1">
                <MDBBtn size="sm" onClick={(e) => this.handleSubmit(e)}>Submit</MDBBtn>
              </MDBCol>
          </MDBRow>
        </form>
          <MDBRow className="justify-content-center">
              <MDBCol md="5" sm="12">
                <MDBBtn>Walk</MDBBtn>
                <p>ETA: </p>
              </MDBCol>
              <MDBCol md="5" sm="12">
                <MDBBtn>Wait</MDBBtn> 
                <p style={{margin: "0"}}>ETA: </p>
                <p style={{margin: "0"}}>Next bus: </p>
              </MDBCol>
          </MDBRow>

      </MDBContainer>
    );
  };
};

export default Main
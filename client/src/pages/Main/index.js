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
      console.log(buses)
      let departOptions = []
      buses.forEach(bus => {
        let thisBus = {}
        thisBus.route = bus.route.id
        thisBus.id = bus.stop.id
        thisBus.title = bus.values[0].direction.title.split("To: ")[1]
        departOptions.push(thisBus)
      });
      this.setState({departOptions})
    })
  }

  handleDepartInput = (e) => {
    e.preventDefault()
    console.log(e.target)
    let index = e.target.selectedIndex
    let selectedBus = e.target.childNodes[index]
    let depart = {
      route: selectedBus.getAttribute('data-route'),
      stopId: e.target.value,
    }
    this.setState({depart})
  }

  listDestinations = () => {
    let {route, stopId} = this.state.depart
    API.getNextStops(route, stopId)
      .then(res => {
        //receive all stop id, stop title info
        //update the departOptions array
        // call function to populate the arrival select.
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
    this.setState({arrival})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {depart, arrival} = this.state.arrival
    //Write API call that sends these endpoints
    // RestBus needs to do a truple query
    // needs to comebine holly's code in the backend
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
                  <End arrivalOptions={this.state.arrivalOptions}/> 
              </MDBCol>
              <MDBCol md="1">
                <MDBBtn size="sm">Submit</MDBBtn>
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
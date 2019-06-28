require("dotenv").config();
const db = require("../models");
const axios = require("axios");

// Defining methods for the appController
module.exports = {
  findAll: async (req, res) => {
    console.log(req.params.lat, req.params.lon)
    let buses = await axios.get(`http://restbus.info/api/locations/${req.params.lat},${req.params.lon}/predictions`)
    res.json(buses.data)
  },
  findStops: (req, res) => {
    // need code for sequelize to find the right route
    // return all route that comes after
    let stops = [
      {
        route: "6S",
        id: "8823",
        title: "Bay St At College St"
      },
      {
        route: "512E",
        id: "8869",
        title: "St Clair Ave West At Bathurst St East Side"
      },
      {
        route: "95",
        id: "9032",
        title: "Avenue"
      }
    ]
    res.json(stops)
  },
  search: async (req, res) => {
    let route = req.params.route
    let origin = req.params.origin
    let destination = req.params.destination
  // For bus time
    let busData = await busTime(route, origin, destination)

  // For latitude, longtitude data
    // let originCoord = await findLatlon(origin)  
    // let destinationCoord = await findLatlon(destination)

  // For walk time
    // Need to remove hardcoded coordinates after database is implemented
    let walkData = await walkTime(originCoord = "43.68734,-79.3974499", destinationCoord = "43.6832099,-79.41767")

    let walkOrWait = {
      bus: busData,
      walk: walkData
    }
    
    res.json(walkOrWait)
  },

};

const busTime = async (route, origin, destination) => {
  //probably need to wrap this in try catch block
  let busTimes = await axios.get(`http://restbus.info/api/agencies/ttc/tuples/${route}:${origin},${route}:${destination}/predictions`)
  let atOriginTime = Math.round(busTimes.data[0].values[0].minutes + busTimes.data[0].values[0].seconds/60)
  let nexBusVehicleId = busTimes.data[0].values[0].vehicle.id
  //Need to figure out what to do for end of line destnations and what to output when ttc stops running
  let destinationBusValues = busTimes.data[1].values
  let index = destinationBusValues.findIndex(bus => bus.vehicle.id === nexBusVehicleId) 
  let atDestinationTime
  
  if (index !== -1){
    atDestinationTime = Math.round(busTimes.data[1].values[index].minutes + busTimes.data[1].values[index].seconds/60)
  }

  //Returns times in minutes
  let busTimeData = {
    nextBus: atOriginTime,
    eta: atDestinationTime
  }

  return busTimeData  
}

const findLatlon = async (stopId) => {
  //queries database to return the latitude and longtitude of that bus stop
}
const walkTime = async (originCoord, destinationCoord) => {
  // Will have to probably wrap this in async try catch block. need to ask how
  let googleData = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originCoord}&destinations=${destinationCoord}&mode=walking&key=${process.env.API_KEY}`)
  let walkTime = parseInt(googleData.data.rows[0].elements[0].duration.text)

  return walkTime
}
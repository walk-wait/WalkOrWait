const db = require("../models");
const axios = require("axios")

// Defining methods for the busController
module.exports = {
  findAll: async (req, res) => {
    console.log(req.params.lat, req.params.lon)
    let buses = await axios.get(`http://restbus.info/api/locations/43.6690119,-79.391594/predictions`)
    res.json(buses.data)
  },
  findStops: (req, res) => {
    // need code for sequelize to find the right route
    // retur all route that comes after
    let stops = [
      {
        route: "504",
        id: "1234",
        title: "Queen"
      },
      {
        route: "75",
        id: "567",
        title: "Bloor"
      },
      {
        route: "95",
        id: "9032",
        title: "Avenue"
      }
    ]
    res.json(stops)
  }
};

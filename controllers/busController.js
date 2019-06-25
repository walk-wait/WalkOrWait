const db = require("../models");
const axios = require("axios")

// Defining methods for the busController
module.exports = {
  findAll: async (req, res) => {
    console.log(req.params.lat, req.params.lon)
    43.6690119 -79.391594
    let buses = await axios.get(`http://restbus.info/api/locations/43.6690119,-79.391594/predictions`)
    res.json(buses.data)
  },
  findStops: (req, res) => {
    // need code for sequelize to find the right route
    // retur all route that comes after
  }
};

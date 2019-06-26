const router = require("express").Router();
const busController = require("../../controllers/busController");

// Matches with "/api/bus/latlon/:lat/:lon"
router.route("/latlon/:lat/:lon")
  .get(busController.findAll)

// Matches with "/api/bus/nextstops/:route/:id"
router.route("/nextstops/:route/:id")
  .get(busController.findStops)    

module.exports = router;
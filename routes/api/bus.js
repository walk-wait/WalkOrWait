const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/bus/latlon/:lat/:lon"
router.route("/latlon/:lat/:lon")
  .get(appController.findAll)

// Matches with "/api/bus/nextstops/:route/:id"
router.route("/nextstops/:route/:id")
  .get(appController.findStops)    

module.exports = router;
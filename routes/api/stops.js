const router = require("express").Router();
const busController = require("../../controllers/busController");

// Matches with "/api/bus/lat/lon"
router.route("/:lat/:lon")
  .get(busController.findStops)

module.exports = router;
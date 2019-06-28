const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/app/search/:route/:origin/:destination"
router.route("/search/:route/:origin/:destination")
  .get(appController.search)

module.exports = router;
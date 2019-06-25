const router = require("express").Router();
const busRoutes = require("./bus");
const stopRoutes = require("./stops")

// Book routes
router.use("/bus", busRoutes);
router.use("/nextstops", stopRoutes)

module.exports = router;

const router = require("express").Router();
const busRoutes = require("./bus");
const appRoutes = require("./app")

// Book routes
router.use("/bus", busRoutes);
router.use("/app", appRoutes);

module.exports = router;

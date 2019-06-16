const router = require("express").Router();
const busRoutes = require("./bus");

// Book routes
router.use("/bus", busRoutes);

module.exports = router;

require("dotenv").config();
const db = require("../models");
const axios = require("axios");

// Create a new arrival
app.post("/api/arrival", function(req, res) {

	const arrivalData = req.body;
	
	let geolocationQuery;
	geolocationQuery = `https://geocoder.api.here.com/6.2/geocode.json?app_id=${process.env.APP_ID}&app_code=${process.env.APP_CODE}&searchtext=`;
	geolocationQuery += encodeURIComponent(arrivalData.address + ', Toronto, Canada');

	console.log(geolocationQuery);
	// make GET request to geolocater API to get lattitude and longitude
	axios.get(geolocationQuery).then(response => {

		const coords = response.data.Response.View[0].Result[0].Location.DisplayPosition;

		arrivalData.latitude = parseFloat(coords.Latitude);
		arrivalData.longitude = parseFloat(coords.Longitude);

		console.log(arrivalData);
		
		db.Arrival.create(arrivalData).then(function(dbarrival) {
			res.json(dbarrival);
		});

	}).catch(error => {
		if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
		} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an object that comes back with details pertaining to the error that occurred.
		console.log(error.request);
		} else {
		// Something happened in setting up the request that triggered an Error
		console.log("Error", error.message);
		}
		console.log(error.config);
	});
});

import axios from "axios";

export default {
  // Gets all bus near geolocation
  getAllBuses: (lat, lon) => {
    return axios.get(`/api/bus/${lat}/${lon}`);
  },
  getNextStops: (route, stopId) =>{
    return axios.get(`/api/nextstops/${route}/${stopId}`)
  }
};

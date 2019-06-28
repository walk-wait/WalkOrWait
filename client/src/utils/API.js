import axios from "axios";

export default {
  // Gets all bus near geolocation
  getAllBuses: (lat, lon) => {
    return axios.get(`/api/bus/latlon/${lat}/${lon}`);
  },
  getNextStops: (route, stopId) =>{
    return axios.get(`/api/bus/nextstops/${route}/${stopId}`)
  },
  search: (route, originStopId, destinationStopId) => {
    return axios.get(`api/app/search/${route}/${originStopId}/${destinationStopId}`)
  }
};

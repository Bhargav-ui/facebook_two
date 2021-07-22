import axios from "axios";

export const getLocationFromCoords = (lat, lon) => {
  return axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      lat +
      "," +
      lon +
      "&key=AIzaSyDQ-0yDs9LF6PLjsg6o_-BPy8INN6YCUks"
  );
};
 
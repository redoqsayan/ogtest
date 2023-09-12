/* eslint-disable react/prop-types */
import axios from "axios";
import  { useEffect } from "react";

function ApiLoader({ body, onDataLoded }) {
  useEffect(() => {
    axios
      .post("https://webservice.dineapi.com/api/dine/storedata", body)
      .then((response) => onDataLoded(response.data));
  }, [onDataLoded]);

  return null;
}

export default ApiLoader;

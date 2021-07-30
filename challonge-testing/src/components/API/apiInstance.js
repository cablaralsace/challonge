import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.challonge.com/v2',
    timeout: 2000,
    headers: {
      'Authorization': 'Q4msiCUTwyPmXzut3wdspTnfAStFxPqcuzSS4U0r',
      'Authorization-Type': 'v1',
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/json'
    }
  });

export default apiInstance;
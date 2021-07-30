import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.challonge.com/v2',
    timeout: 5000,
    headers: {
      'Authorization': '',
      'Authorization-Type': 'v1',
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/json'
    }
  });

export default apiInstance;
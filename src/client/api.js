import axios from "axios";

const TIMEOUT = 5000;
const PORT = process.env.API_PORT || 3005;
const defaultURL = `http://localhost:${PORT}/api`;

class API {
  constructor(baseURL, timeout) {
    this._http = axios.create({
      baseURL,
      timeout
    })
  }

  async _load(url, options) {
    const response = await this._http.request({url, ...options});
    return response.data;
  }

  getUsers() {
    return this._load('/users');
  }
}

export default new API(defaultURL, TIMEOUT);

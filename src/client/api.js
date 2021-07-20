import axios from "axios";

class API {
  constructor(baseURL, headers = {}) {
    this._http = axios.create({
      baseURL,
      headers
    });
  }

  async _load(url, options) {
    const response = await this._http.request({url, ...options});
    return response.data;
  }

  getUsers() {
    return this._load('/users');
  }
}

const getAPI = (baseURL, headers) => new API(baseURL, headers);

export {getAPI};

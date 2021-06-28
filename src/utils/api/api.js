import Axios from "axios";

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Token " + token;
  return config;
});

export class Api {
  static async get(url, params = {}) {
    return Axios.get(url, {
      params,
    });
  }

  static async post(url, body) {
    return Axios.post(url, body);
  }

  static async delete(url) {
    return Axios.delete(url);
  }

  static async put(url, body) {
    return Axios.put(url, body);
  }
}

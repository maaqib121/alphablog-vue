import axios from "axios";
import store from "../store/index";

export function getArticles() {
  return axios
    .get("https://aaqib-alphablog.herokuapp.com/api/v1/articles")
    .then(response => {
      return response.data.data;
    });
}

export function createArticle(article) {
  return axios
    .post("https://aaqib-alphablog.herokuapp.com/api/v1/articles/", article, {
      headers: {
        Authorization: store.getters.getToken
      }
    })
    .then(response => {
      return response.data;
    });
}

export function login(credentials) {
  return axios
    .post("https://aaqib-alphablog.herokuapp.com/api/v1/login/", credentials)
    .then(response => {
      return response.data;
    });
}

export function showArticle(id) {
  return axios
    .get(`https://aaqib-alphablog.herokuapp.com/api/v1/articles/${id}/`)
    .then(response => {
      return response.data.data;
    });
}

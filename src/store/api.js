import axios from "axios";

export function getArticles() {
  return axios
    .get("https://aaqib-alphablog.herokuapp.com/api/v1/articles")
    .then(response => {
      return response.data;
    })
    .then(jsonData => {
      return jsonData.data;
    });
}

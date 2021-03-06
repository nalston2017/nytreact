import axios from "axios";

export default{
  searchArticles: (topic, startYear, endYear) => {

    var authKey = "299f9dc19a07442084517300c5d0b90d";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";

    return axios.get(queryURL);
  },

  // Gets all articles
  getArticles: () => {
    return axios.get("/api/save");
  },
  // Gets the article with the given id
  getArticle: (id) => {
    return axios.get("/api/save/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: (id) => {
    return axios.delete("/api/save/" + id);
  },
  // Saves a article to the database
  saveArticle: (articleData) => {
    return axios.post("/api/save", articleData);
  }
}

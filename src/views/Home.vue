<template>
  <div class="home">
    <h1 class="display-4 mt-4">Articles List</h1>
    <div>
      <b-row v-for="article in articles" :key="article.id" class="justify-content-center">
        <b-col md="8" lg="6">
          <b-card
            :title="article.attributes.title"
            :sub-title="article.attributes.user.username"
            class="mb-4 shadow p-3 bg-white rounded"
          >
            <b-card-text class="mt-3">{{ article.attributes.description }}</b-card-text>
            <b-card-text>
              Created {{ article.attributes.created_at | moment }} |
              Updated {{ article.attributes.updated_at | moment }}
            </b-card-text>
            <b-button class="mt-3" variant="outline-primary">View Article</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import moment from "moment";
import { getArticles } from "../store/api";

export default {
  name: "Home",
  data() {
    return {
      per_page: 4,
      current_page: 1,
      articles: [],
      date: moment("2018-11-11").format("2018-11-11")
    };
  },

  computed: {
    rows() {
      return this.length;
    }
  },

  filters: {
    moment(date) {
      //return moment(date).format("DD-MM-YYYY");
      return moment(date).from(Date.now());
    }
  },

  mounted: function() {
    axios
      .get("https://aaqib-alphablog.herokuapp.com/api/v1/articles")
      .then(response => {
        return response.data;
      })
      .then(jsonData => {
        this.articles = jsonData.data;
        console.log(getArticles());
      });
  }
};
</script>

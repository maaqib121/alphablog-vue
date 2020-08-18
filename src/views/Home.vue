<template>
  <div class="home">
    <h1 class="display-4 mt-4">Articles List</h1>
    <b-row>
      <b-col
        v-for="article in articles"
        :key="article.id"
        class="justify-content-center"
        md="6"
        lg="4"
      >
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
</template>


<script>
// import axios from "axios";
import moment from "moment";
import { getArticles } from "../store/api";

export default {
  name: "Home",
  data() {
    return {
      articles: []
    };
  },

  filters: {
    moment(date) {
      return moment(date).from(Date.now());
    }
  },

  mounted: function() {
    getArticles().then(response => {
      this.articles = response;
    });
    console.log(getArticles());
  }
};
</script>

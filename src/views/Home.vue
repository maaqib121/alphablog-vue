<template>
  <div>
    <h1 class="display-4 mt-4">Articles List</h1>
    <b-row>
      <b-col lg="4" md="6" v-for="article in articles" :key="article.id" class="mb-4">
        <Article :showButton="true" :article="article.attributes" :id="article.id" />
      </b-col>
    </b-row>
  </div>
</template>


<script>
// import axios from "axios";
import { getArticles } from "../store/api";
import Article from "../components/Article";

export default {
  name: "Home",
  data() {
    return {
      articles: []
    };
  },

  components: {
    Article
  },

  mounted: function() {
    getArticles().then(response => {
      this.articles = response;
    });
  }
};
</script>

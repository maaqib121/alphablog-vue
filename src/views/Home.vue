<template>
  <div class="home">
    <h1>Articles List</h1>
    <div>
      <b-row v-for="article in articles" :key="article.id" class="justify-content-center">
        <b-col md="8" lg="6">
          <b-card
            :title="article.attributes.title"
            :sub-title="article.attributes.user.username"
            class="mt-4"
          >
            <b-card-text class="mt-3">{{ article.attributes.description }}</b-card-text>
            <b-card-text>
              Created at: {{ article.attributes.created_at }} |
              Updated at: {{ article.attributes.updated_at }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      articles: []
    };
  },
  mounted: function() {
    axios
      .get("https://aaqib-alphablog.herokuapp.com/api/v1/articles")
      .then(response => {
        return response.data;
      })
      .then(jsonData => {
        this.articles = jsonData.data;
      });
  }
};
</script>

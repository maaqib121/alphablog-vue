<template>
  <div v-if="loaded">
    <h1 class="display-4 mt-4">{{ article.attributes.title }}</h1>
    <b-row class="justify-content-center">
      <b-col lg="8">
        <Article
          :showButton="false"
          :article="article.attributes"
          :id="article.id.toString()"
          :truncate="false"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { showArticle } from "../store/api";
import Article from "../components/Article";

export default {
  name: "Show",
  components: {
    Article
  },

  data() {
    return {
      article: "",
      loaded: false
    };
  },

  created() {
    const id = this.$route.params.id;
    showArticle(id).then(response => {
      this.article = response;
      this.loaded = true;
    });
  }
};
</script>

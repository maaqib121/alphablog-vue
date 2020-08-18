<template>
  <div class="login">
    <h1 class="display-4 mt-4">Create a new article</h1>
    <b-row class="justify-content-center mt-4">
      <b-col lg="8" md="10">
        <div v-if="response && response.error">
          <div v-for="error in response.error.title" :key="error">
            <b-alert show variant="danger">Title {{ error }}</b-alert>
          </div>
          <div v-for="error in response.error.description" :key="error">
            <b-alert show variant="danger">Description {{ error }}</b-alert>
          </div>
        </div>

        <b-card class="mb-4 shadow p-3 bg-white rounded">
          <b-form @submit="onCreate">
            <b-form-group class="mx-4" label="Title:" label-for="title">
              <b-form-input id="title" v-model="article.title" required placeholder="Article Title"></b-form-input>
            </b-form-group>

            <b-form-group class="mx-4 mt-4" label="Description:" label-for="description">
              <b-form-textarea
                id="description"
                rows="5"
                v-model="article.description"
                required
                placeholder="Article Description"
              ></b-form-textarea>
            </b-form-group>

            <b-button class="mx-4 mt-4" type="submit" variant="outline-success">Create Article</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { createArticle } from "../store/api";

export default {
  name: "Create",
  data() {
    return {
      article: {
        title: "",
        description: ""
      },
      response: ""
    };
  },

  methods: {
    onCreate(evt) {
      evt.preventDefault();
      createArticle(this.article).then(response => {
        this.response = response;
        if ("id" in this.response) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<template>
  <div class="login">
    <h1>Create a new article</h1>
    <b-row class="justify-content-center mt-4">
      <b-col lg="7" md="8">
        <div v-if="response && response.error">
          <div v-for="error in response.error.title" :key="error">
            <b-alert show variant="danger">Title {{ error }}</b-alert>
          </div>
          <div v-for="error in response.error.description" :key="error">
            <b-alert show variant="danger">Description {{ error }}</b-alert>
          </div>
        </div>

        <b-card>
          <b-form @submit="onCreate">
            <b-form-group class="ml-4 mr-4" id="title-group" label="Title:" label-for="input-1">
              <b-form-input id="title" v-model="article.title" required placeholder="Article Title"></b-form-input>
            </b-form-group>

            <b-form-group
              class="ml-4 mr-4 mt-4"
              id="description-group"
              label="Description:"
              label-for="description"
            >
              <b-form-textarea
                id="description"
                rows="5"
                v-model="article.description"
                required
                placeholder="Article Description"
              ></b-form-textarea>
            </b-form-group>

            <b-button class="ml-4 mr-4 mt-4" type="submit" variant="success">Create Article</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

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
      axios
        .post(
          "https://aaqib-alphablog.herokuapp.com/api/v1/articles/",
          this.article
        )
        .then(response => {
          this.response = response.data;
          if ("id" in this.response) {
            this.$router.push("/");
          }
        });
    }
  }
};
</script>
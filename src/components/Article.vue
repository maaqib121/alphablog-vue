<template>
  <b-card
    class="mb-3 shadow pb-3 bg-white rounded h-100"
    :header="article.user.username"
    :title="article.title"
  >
    <b-card-text v-if="truncate" class="mt-3">{{ article.description | truncate }}</b-card-text>
    <b-card-text v-else class="mt-3">{{ article.description }}</b-card-text>

    <b-card-text>
      Created {{ article.created_at | moment }} |
      {{ article.updated_at | moment }}
    </b-card-text>
    <b-button v-if="showButton" class="mt-3" variant="outline-primary">
      <router-link class="text-dark" :to="`/articles/${id}`">View Article</router-link>
    </b-button>
  </b-card>
</template>

<script>
import moment from "moment";

export default {
  name: "article",
  props: {
    showButton: Boolean,
    article: Object,
    id: String,
    truncate: {
      type: Boolean,
      default: true
    }
  },

  filters: {
    moment(date) {
      return moment(date).from(Date.now());
    },
    truncate(text) {
      if (text.length > length) {
        return text.substring(40, length) + "...";
      } else {
        return text;
      }
    }
  }
};
</script>

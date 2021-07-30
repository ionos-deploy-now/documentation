<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <div
      class="flex items-center opacity-50 hover:opacity-100 hover:no-underline"
    >
      <Edit3Icon size="1.5x" />Suggest changes to this page
    </div>
  </a>
</template>

<static-query>
query {
  metadata {
    settings {
      github
    }
  }
}
</static-query>

<script>
import { Edit3Icon } from "vue-feather-icons";

export default {
  components: {
    Edit3Icon,
  },

  props: {
    path: String,
    required: true
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
    github() {
      return this.settings.github;
    },
    url() {
      return this.github + "/content/" + this.path; // see @gridsome/source-filesystem options
    }
  },
};
</script>

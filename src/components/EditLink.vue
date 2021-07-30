<template>
  <a href="url" target="_blank" rel="noopener noreferrer">
    <div
      class="flex items-center opacity-50 hover:opacity-100 hover:no-underline"
    >
      <Edit3Icon size="1.5x" />Suggest changes to this page
<!--       {{ settings.github }}
      {{ page.id }} -->
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

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
    page() {
      console.log(this.$page);
      return this.$page.markdownPage;
    },
  },
};
</script>

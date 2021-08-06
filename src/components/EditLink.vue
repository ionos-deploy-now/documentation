<template>
  <div>
    <a
      :href="url"
      target="_blank"
      class="flex items-center opacity-50 hover:opacity-100 hover:no-underline"
      rel="noopener noreferrer"
    >
      <Edit3Icon size="1x" />
      <span class="ml-1">
        {{ $t('edit-link.text') }}
      </span>
    </a>
  </div>
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
import { Edit3Icon } from 'vue-feather-icons';

export default {
  components: {
    Edit3Icon,
  },

  props: {
    path: {
      type: String,
      required: true,
    },
  },

  computed: {
    github() {
      return this.$static.metadata.settings.github;
    },
    url() {
      return `${this.github}/edit/main/content/${this.path}`;
    },
  },
};
</script>

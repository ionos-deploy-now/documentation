<template>
  <div>
    <a
      :href="url"
      target="_blank"
      class="flex items-center opacity-50 hover:opacity-100 hover:no-underline"
      rel="noopener noreferrer"
    >
      <EditIcon decorative />
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
import EditIcon from 'vue-material-design-icons/PencilOutline'

export default {
  components: {
    EditIcon,
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

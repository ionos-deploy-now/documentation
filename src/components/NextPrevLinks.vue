<template>
  <div class="flex justify-between items-stretch space-x-2">
    <g-link
      v-if="prev"
      :to="prev.path"
      class="btn btn-hover"
    >
      <ArrowLeftIcon class="mr-2" size="1x" />
      {{ prev.title }}
    </g-link>

    <g-link
      v-if="next"
      :to="next.path"
      class="btn btn-hover"
      :class="{ 'ml-auto': !prev }"
    >
      {{ next.title }}
      <ArrowRightIcon class="ml-2" size="1x" />
    </g-link>
  </div>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons';

export default {
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },

  computed: {
    page() {
      return this.$page.markdownPage;
    },
    pages() {
      return this.$page.allMarkdownPage.edges.map(edge => edge.node);
    },
    next() {
      if (this.pages && !this.page.next) {
        return false;
      }

      return this.pages.find(page => page.path === this.page.next);
    },
    prev() {
      if (this.pages && !this.page.prev) {
        return false;
      }

      return this.pages.find(page => page.path === this.page.prev);
    },
  },
};
</script>

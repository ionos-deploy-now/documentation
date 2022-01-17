<template>
  <div class="p-8 rounded border-1 border-transparent hover:border-ui-primary">
    <g-link :to="post.path">
      <g-image v-if="post.teaser" :src="post.teaser" fit="contain" class="mb-8 rounded-lg" />
      <h2>{{ post.title }}</h2>
      <div class="text-sm mb-4 space-x-4">
        <span v-if="post.author" class="author font-semibold capitalize">{{ author }}</span>
        <span>{{ $tc('blog.timeToRead', post.timeToRead, { time: post.timeToRead }) }}</span>
        <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
      </div>
      <div class="pointer-events-none" v-html="blogPostExcerpt"></div>
    </g-link>
  </div>
</template>

<script>
import { formatDate } from '~/libs/util';

export default {
  name: 'BlogTeaser',
  props: {
    post: Object,
  },
  computed: {
    author() {
      return `@${this.post.author.split('-')[0]}`
    },
    blogPostExcerpt() {
      return this.post.description || `${this.post.excerpt}...`
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped>
.author {
  color: #718095;
}
</style>

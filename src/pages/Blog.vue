<template>
  <Layout>
    <div class="container">
      <h1 class="pl-8">{{ $t('blog.title') }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg: gap-8">
        <div
          v-for="(post, index) in blogPosts"
          :key="post.path"
          :class="blogPostClass(index)"
          class="p-8 rounded border-1 border-transparent hover:border-ui-border"
        >
          <g-link :to="post.path">
            <h2>{{ post.title }}</h2>
            <div class="text-sm mb-4 space-x-4">
              <span v-if="post.author" class="text-ui-primary capitalize">@{{ post.author.split('-')[0] }}</span>
              <span>{{ $tc('blog.timeToRead', post.timeToRead, { time: post.timeToRead }) }}</span>
              <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
            </div>
            <div class="pointer-events-none" v-html="blogPostExcerpt(post)"></div>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allMarkdownPage(filter: { contentType: { eq: "blog" } }) {
    edges {
      node {
        path
        title
        excerpt
        description
        contentType
        timeToRead
        tags
        author
        createdAt
      }
    }
  }
}
</page-query>

<script>
import { formatDate } from '~/libs/util';

export default {
  computed: {
    blogPosts() {
      return this.$page.allMarkdownPage.edges
        .map(edge => edge.node)
        .sort((a, b) => b.createdAt - a.createdAt);
    },
  },
  methods: {
    formatDate,
    blogPostClass(index) {
      return { 'md:transform md:translate-y-16': index % 2 === 1 };
    },
    blogPostExcerpt(post) {
      return post.description || `${post.excerpt}...`
    },

  },
  metaInfo: {
    title: 'Blog',
  },
};
</script>

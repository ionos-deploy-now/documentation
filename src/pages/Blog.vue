<template>
  <Layout>
    <div class="container space-y-16">
      <h1>{{ $t('blog.title') }}</h1>
      <div class="divide-y divide-ui-border">
        <div v-for="post in blogPosts" :key="post.path" class="py-12 first:pt-0">
          <g-link :to="post.path">
            <h2>{{ post.title }}</h2>
            <div class="text-sm mb-4">{{ formatDate(post.createdAt) }}</div>
            <div class="pointer-events-none truncate max-h-[300px]" v-html="post.excerpt"></div>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allMarkdownPage {
    edges {
      node {
        path
        title
        excerpt
        contentType
        createdAt
      }
    }
  }
}
</page-query>

<script>
import { formatDate } from '@/libs/util';

export default {
  computed: {
    blogPosts() {
      return this.$page.allMarkdownPage.edges
        .filter(edge => edge.node.contentType === 'blog')
        .map(edge => edge.node)
        .sort((a, b) => b.createdAt - a.createdAt);
    },
  },
  methods: {
    formatDate,
  },
  metaInfo: {
    title: 'Deploy Now Blog - All Posts',
  },
};
</script>

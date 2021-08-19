<template>
  <Layout>
    <div class="container space-y-16">
      <h1>{{ $t('blog.title') }}</h1>
      <g-link
        v-for="post in blogPosts"
        class="block card dark:bg-ui-secondary"
        :to="post.path"
        :key="post.path"
      >
        <div class="pointer-events-none" v-html="post.content"></div>
      </g-link>
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
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$page.allMarkdownPage.edges
        .filter(edge => edge.node.path.indexOf('/blog/') === 0)
        .map(edge => edge.node);
    },
  },
  metaInfo: {
    title: 'Blog',
  },
};
</script>

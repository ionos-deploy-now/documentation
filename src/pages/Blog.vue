<template>
  <Layout>
    <div class="container">
      <h1 class="pl-8">{{ $t('blog.title') }}</h1>
      <div class="hidden md:grid grid-cols-2 gap-8">
        <div class="space-y-8">
          <BlogTeaser v-for="post in groupedBlogPosts.left" :key="post.path" :post="post" />
        </div>
        <div class="space-y-8 transform translate-y-16">
          <BlogTeaser v-for="post in groupedBlogPosts.right" :key="post.path" :post="post" />
        </div>
      </div>
      <div class="md:hidden grid grid-cols-1 gap-4">
        <BlogTeaser v-for="post in sortedBlogPosts" :key="post.path" :post="post" />
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
        teaser
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
import BlogTeaser from '~/components/BlogTeaser';

export default {
  components: {
    BlogTeaser,
  },
  computed: {
    sortedBlogPosts() {
      return this.$page.allMarkdownPage.edges
        .map(edge => edge.node)
        .sort((a, b) => b.createdAt - a.createdAt);
    },
    groupedBlogPosts() {
      return this.sortedBlogPosts.reduce((acc, post, i) => {
        if (i % 2 === 0) {
          acc.left.push(post);
        } else {
          acc.right.push(post);
        }
        return acc;
      }, { left: [], right: [] });
    },
  },
  metaInfo: {
    title: 'Blog',
  },
};
</script>

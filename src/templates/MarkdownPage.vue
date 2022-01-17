<template>
  <Layout>
    <div class="flex flex-wrap justify-start">
      <div
        class="<md:hidden lg:w-1/5 lg:order-2 overflow-y-auto"
        :class="{ 'sticky w-1/5 border-ui-border border-r lg:border-l lg:border-r-0': showOnThisPage() }"
        :style="sidebarStyle"
      >
        <OnThisPage v-if="showOnThisPage()" />
      </div>

      <div class="container pb-24 <md:max-w-[90vw] lg:w-3/5 lg:order-1" :class="{ 'md:w-3/5': showOnThisPage() }">
        <Blog v-if="$page.markdownPage.contentType === 'blog'" :page="$page.markdownPage" />
        <Documentation v-else :page="$page.markdownPage" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    fileInfo {
      path
    }
    editable
    timeToRead
    content
    contentType
    header
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage {
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import { mapGetters } from 'vuex';
import OnThisPage from '~/components/OnThisPage.vue';
import Blog from '~/components/content/Blog.vue';
import Documentation from '~/components/content/Documentation.vue';
import { capitalize } from '~/libs/util';
import { metaInfo, JsonLd } from '~/libs/seo';

export default {
  components: {
    OnThisPage,
    Blog,
    Documentation,
  },
  methods: {
    showOnThisPage() {
      return this.headings && this.headings.length > 1;
    },
  },
  computed: {
    ...mapGetters(['sidebarStyle']),
    headings() {
      return this.$page.markdownPage.headings.filter(h => h.depth > 1);
    },
    pageInfo() {
      const { contentType, content, title: headline } = this.$page.markdownPage;
      const title = `${this.$page.markdownPage.title} | ${capitalize(contentType)}`;
      const description = this.$page.markdownPage.description;
      return {
        title,
        headline,
        description,
        content,
        contentType,
        url: process.isClient ? window.location.href : this.$route.fullPath,
      };
    },
  },
  metaInfo() {
    const head = metaInfo(this.pageInfo);
    head.script.push(JsonLd.blogPost(this.pageInfo))
    return head;
  },
};
</script>

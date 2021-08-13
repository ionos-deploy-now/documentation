<template>
  <Layout>
    <div class="flex flex-wrap justify-start">
      <div
        class="hidden"
        :class="{ 'border-ui-border border-r overflow-y-auto md:block md:sticky md:w-1/5 lg:order-2 lg:border-l lg:border-r-0': showOnThisPage() }"
        :style="sidebarStyle"
      >
        <OnThisPage v-if="showOnThisPage()" />
      </div>

      <div class="container pb-24 lg:order-1 <md:max-w-[100vw]" :class="{ 'md:w-3/5': showOnThisPage() }">
        <div class="content" v-html="$page.markdownPage.content" />

        <EditLink class="mt-10" :path="$page.markdownPage.fileInfo.path" />

        <div v-if="showPrevNextLinks" class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
          <NextPrevLinks />
        </div>
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
    timeToRead
    content
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
import OnThisPage from '@/components/OnThisPage.vue';
import NextPrevLinks from '@/components/NextPrevLinks.vue';
import EditLink from '@/components/EditLink.vue';

export default {
  components: {
    OnThisPage,
    NextPrevLinks,
    EditLink,
  },
  methods: {
    showOnThisPage() {
      return this.headings && this.headings.length > 1;
    },
  },
  computed: {
    ...mapGetters(['sidebarStyle']),
    showPrevNextLinks() {
      return this.$page.markdownPage.prev || this.$page.markdownPage.next;
    },
    headings() {
      return this.$page.markdownPage.headings.filter(h => h.depth > 1);
    },
  },
  metaInfo() {
    const title = this.$page.markdownPage.title;
    const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    };
  },
};
</script>

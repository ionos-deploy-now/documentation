<template>
  <Layout v-slot="{ headerHeight }">
    <div class="flex flex-wrap justify-start">
      <div
        class="hidden border-ui-border border-r md:block md:sticky lg:border-l lg:border-r-0 md:w-1/5 lg:order-2"
        :style="sidebarStyle(headerHeight)"
      >
        <OnThisPage />
      </div>

      <div class="container pb-24 md:w-3/5 lg:order-1">
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
  allMarkdownPage{
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
import OnThisPage from "@/components/OnThisPage.vue";
import NextPrevLinks from "@/components/NextPrevLinks.vue";
import EditLink from "@/components/EditLink.vue";
import {sidebar} from "../libs/mixins";

export default {
  mixins: [sidebar],
  components: {
    OnThisPage,
    NextPrevLinks,
    EditLink,
  },
  methods: {
    sidebarStyle(headerHeight) {
      return this.stickySidebarStyle(headerHeight)
    }
  },
  computed: {
    showPrevNextLinks() {
      return this.$page.markdownPage.prev || this.$page.markdownPage.next;
    }
  },
  metaInfo() {
    const title = this.$page.markdownPage.title;
    const description =
      this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: title,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
};
</script>

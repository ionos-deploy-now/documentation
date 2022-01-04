<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen bg-ui-background">
      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b border-ui-border"
        @resize="onResize"
      >
        <LayoutHeader />
      </header>

      <main
        class="relative justify-center bg-ui-background"
        :class="{ flex: hasSidebar }"
      >
        <aside
          class="sidebar"
          :class="{ 'lg:hidden': !hasSidebar, open: sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-16 bg-ui-background">
            <Sidebar @navigate="setSidebarOpen(false)" />
          </div>
        </aside>

        <div class="grid grid-cols-1" :class="{ 'pl-0 lg:w-4/5': hasSidebar }">
          <slot />
        </div>
      </main>
    </div>

    <LayoutFooter ref="footer" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { mapGetters, mapActions } from "vuex";
import BullhornOutline from "vue-material-design-icons/BullhornOutline";
import ChevronDoubleRightIcon from "vue-material-design-icons/ChevronDoubleRight";
import LayoutHeader from "~/components/LayoutHeader";
import LayoutFooter from "~/components/LayoutFooter";
import Banner from "~/components/Banner";
import Sidebar from "~/components/Sidebar";
import JobSearchLink from "~/components/JobSearchLink";

export default {
  components: {
    Banner,
    BullhornOutline,
    ChevronDoubleRightIcon,
    JobSearchLink,
    LayoutFooter,
    LayoutHeader,
    Sidebar,
  },
  watch: {
    sidebarOpen(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    },
  },
  computed: {
    ...mapGetters(['headerHeight', 'sidebarStyle', 'sidebarOpen']),
    hasSidebar() {
      return this.$page?.markdownPage?.sidebar && this.headerHeight > 0;
    },
  },
  methods: {
    ...mapActions({
      setHeaderHeight: 'setHeaderHeight',
      setSidebarOpen: 'setSidebarOpen',
    }),
    onResize() {
      if (this.$refs.header) {
        this.setHeaderHeight(this.$refs.header.offsetHeight);
      }
    },
  },
  mounted() {
    this.onResize();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: process.env.SITE_URL + '/favicon.png',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: process.env.SITE_URL + '/favicon.png',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen bg-ui-background">
      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="onResize"
      >
        <LayoutHeader />
      </header>

      <main class="relative flex bg-ui-background">
        <aside v-if="hasSidebar" class="sidebar" :class="{ open: sidebarOpen }" :style="sidebarStyle">
          <div class="w-full pb-16 bg-ui-background">
            <Sidebar @navigate="sidebarOpen = false" />
          </div>
        </aside>

        <div :class="{ 'pl-0 lg:w-4/5': hasSidebar }">
          <slot />
        </div>
      </main>
    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button
        class="icon p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
        @click="sidebarOpen = !sidebarOpen"
      >
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
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
import Sidebar from '@/components/Sidebar';
import LayoutHeader from '@/components/LayoutHeader';
import LayoutFooter from '@/components/LayoutFooter';
import { MenuIcon, XIcon } from 'vue-feather-icons';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    LayoutFooter,
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  watch: {
    sidebarOpen(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    },
  },
  computed: {
    ...mapGetters(['headerHeight', 'sidebarStyle']),
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    },
  },
  methods: {
    ...mapActions(['setHeaderHeight']),
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
          content: process.env.GRIDSOME_SITE_URL + '/favicon.png',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: process.env.GRIDSOME_SITE_URL + '/favicon.png',
        },
      ],
    };
  },
};
</script>

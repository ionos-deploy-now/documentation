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
          <slot :header-height="headerHeight" />
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

    <LayoutFooter />
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
import { sidebar } from '@/libs/mixins';
import { MenuIcon, XIcon } from 'vue-feather-icons';

export default {
  mixins: [sidebar],
  components: {
    LayoutFooter,
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false
    };
  },
  watch: {
    sidebarOpen(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    }
  },
  methods: {
    onResize() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    }
  },
  computed: {
    sidebarStyle() {
      return this.stickySidebarStyle(this.headerHeight);
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    }
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
          content: 'website'
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: process.env.SITE_URL + '/favicon.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: process.env.SITE_URL + '/favicon.png'
        }
      ]
    };
  }
};
</script>

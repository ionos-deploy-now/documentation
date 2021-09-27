<template>
  <div class="px-4 py-2 bg-ui-background min-h-[60px]">
    <div class="flex justify-between items-center">
      <div class="flex-center">
        <g-link to="/" class="flex-center mr-2 sm:mr-12" title="Home">
          <img class="h-8 mr-2 deploy-now-logo" src="/logo.svg" alt="Deploy Now logo" />
          <DeployNow class="hidden sm:block md:text-2xl" />
        </g-link>

        <div v-if="navLinks.length > 0" class="hidden xl:block">
          <g-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="p-2 mx-2 font-semibold font-headline text-ui-primary hover:text-ui-secondary dark:hover:text-white"
          >
            {{ link.title }}
          </g-link>
        </div>
      </div>

      <div class="p-3 lg:p-0 max-w-screen-xs <lg:ml-auto" :class="{ '<lg:flex-grow': searchFocused }">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>

      <div class="flex-center lg:space-x-8" :class="{ 'hide-mobile': searchFocused }">
        <a
          v-if="settings.github"
          :href="settings.github"
          class="icon p-2"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <GithubIcon class="icon icon-lg" />
        </a>

        <ToggleDarkMode class="icon icon-lg p-2" />

        <a
          v-if="settings.web"
          :href="settings.web"
          class="btn btn-primary ml-4 hide-mobile"
          target="_blank"
          rel="noopener noreferrer"
          title="Website"
        >
          <ExternalLinkIcon class="icon" />
          Deploy Now
        </a>

        <button
          class="icon p-2 text-ui-typo active:text-ui-typo lg:hidden"
          @click="setSidebarOpen(!sidebarOpen)"
        >
          <CloseIcon class="icon icon-lg" v-if="sidebarOpen" />
          <MenuIcon class="icon icon-lg" v-else />
        </button>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import { mapGetters, mapActions } from 'vuex';
import GithubIcon from 'vue-material-design-icons/Github'
import ExternalLinkIcon from 'vue-material-design-icons/OpenInNew'
import MenuIcon from 'vue-material-design-icons/Menu'
import CloseIcon from 'vue-material-design-icons/Close'
import ToggleDarkMode from '~/components/ToggleDarkMode';
import DeployNow from '~/components/DeployNow';

const Search = () => import(/* webpackChunkName: "search" */ '~/components/Search').catch(error => console.warn(error));

export default {
  components: {
    Search,
    DeployNow,
    ToggleDarkMode,
    GithubIcon,
    ExternalLinkIcon,
    MenuIcon,
    CloseIcon,
  },
  computed: {
    ...mapGetters({
      searchFocused: 'searchFocused',
      sidebarOpen: 'sidebarOpen',
    }),
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
    navLinks() {
      return this.settings.nav.links;
    },
  },
  methods: {
    ...mapActions(['setSidebarOpen']),
  },
};
</script>

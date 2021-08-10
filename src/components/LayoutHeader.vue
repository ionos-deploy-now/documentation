<template>
  <div class="px-4 py-2 bg-ui-background min-y-[60px]">
    <div class="flex justify-between items-center">
      <div class="flex-center">
        <g-link to="/" class="flex-center mr-2 sm:mr-12" title="Home">
          <img class="h-8 mr-2" src="/logo.svg" alt="Deploy Now logo" />
          <DeployNow />
        </g-link>

        <div v-if="navLinks.length > 0" class="hidden md:block">
          <g-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="p-2 mx-2 text-base font-bold text-ui-primary hover:text-ui-secondary"
          >
            {{ link.title }}
          </g-link>
        </div>
      </div>

      <div class="px-4 max-w-screen-xs <lg:ml-auto">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>

      <div class="md:flex-center space-x-2" :class="iconClass">
        <a
          v-if="settings.web"
          :href="settings.web"
          class="icon p-2 mx-2"
          target="_blank"
          rel="noopener noreferrer"
          title="Website"
        >
          <GlobeIcon size="1.5x" />
        </a>

        <a
          v-if="settings.twitter"
          :href="settings.twitter"
          class="icon p-2 mx-2"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <TwitterIcon size="1.5x" />
        </a>

        <a
          v-if="settings.github"
          :href="settings.github"
          class="icon p-2 mx-2"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <GithubIcon size="1.5x" />
        </a>

        <ToggleDarkMode class="p-2 mx-2" />
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
import { mapState } from 'vuex';
import { GlobeIcon, GithubIcon, TwitterIcon } from 'vue-feather-icons';
import ToggleDarkMode from '@/components/ToggleDarkMode';
import DeployNow from '@/components/DeployNow';

const Search = () => import(/* webpackChunkName: "search" */ '@/components/Search').catch(error => console.warn(error));

export default {
  components: {
    DeployNow,
    Search,
    ToggleDarkMode,
    GlobeIcon,
    GithubIcon,
    TwitterIcon,
  },

  computed: {
    ...mapState({ searchFocused: 'searchFocused' }),
    iconClass() {
      return {
        'flex-center': !this.searchFocused,
        '<md:hidden': this.searchFocused,
        '<md:opacity-0': this.searchFocused,
      };
    },
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
};
</script>

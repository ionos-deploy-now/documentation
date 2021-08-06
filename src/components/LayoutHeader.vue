<template>
  <div class="px-4 py-2 border-t-2 border-ui-primary">
    <div class="flex flex-grow justify-between items-center">
      <g-link to="/" class="flex items-center mr-2 sm:mr-12" title="Home">
        <img class="h-8" src="/logo.svg" alt="Deploy Now logo" />
        <DeployNow class="hidden sm:block sm:ml-2" />
      </g-link>

      <div class="px-4 max-w-screen-xs min-w-[400px]">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>

      <div class="flex items-center">
        <div v-if="settings.nav.links.length > 0" class="hidden sm:block sm:px-8">
          <g-link
            v-for="link in settings.nav.links"
            :key="link.path"
            :to="link.path"
            class="text-base font-bold text-ui-primary hover:text-ui-secondary"
          >
            {{ link.title }}
          </g-link>
        </div>

        <div class="flex items-center justify-end px-2 sm:px-8">
          <a
            v-if="settings.web"
            :href="settings.web"
            class="ml-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Website"
            name="Website"
          >
            <GlobeIcon size="1.5x" />
          </a>

          <a
            v-if="settings.twitter"
            :href="settings.twitter"
            class="ml-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            name="Twitter"
          >
            <TwitterIcon size="1.5x" />
          </a>

          <a
            v-if="settings.github"
            :href="settings.github"
            class="ml-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            name="Github"
          >
            <GithubIcon size="1.5x" />
          </a>

          <ToggleDarkMode />
        </div>

        <a class="btn primary px-4 py-2">
          {{ $t('header.login') }}
        </a>
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
import ToggleDarkMode from '@/components/ToggleDarkMode';
import DeployNow from '@/components/DeployNow';
import { GlobeIcon, GithubIcon, TwitterIcon } from 'vue-feather-icons';

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
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
  },
};
</script>

<template>
  <button
    class="icon"
    @click="handleClick"
    :aria-label="$t('display-mode.toggle-dark-mode')"
    :title="$t('display-mode.toggle-dark-mode')"
  >
    <SunIcon v-if="isDarkMode" size="1.5x" />
    <MoonIcon v-else size="1.5x" />
  </button>
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons';

export const LIGHTS_OUT = 'lights-out';

export default {
  components: {
    SunIcon,
    MoonIcon,
  },

  data() {
    return {
      isDarkMode: false,
    };
  },

  methods: {
    handleClick() {
      const hasDarkMode = document.documentElement.hasAttribute(LIGHTS_OUT);
      return this.toggleDarkMode(!hasDarkMode);
    },

    toggleDarkMode(shouldBeDark) {
      document.documentElement.toggleAttribute(LIGHTS_OUT, shouldBeDark);
      this.isDarkMode = shouldBeDark;
      this.writeToStorage(shouldBeDark);
      return shouldBeDark;
    },

    detectPrefered() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    hasInStorage() {
      return localStorage.getItem(LIGHTS_OUT) !== null;
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(LIGHTS_OUT, prefersDark ? 'true' : 'false');
    },

    getFromStorage() {
      return localStorage.getItem(LIGHTS_OUT) === 'true';
    },
  },

  mounted() {
    if (this.hasInStorage()) {
      this.toggleDarkMode(this.getFromStorage());
    } else if (process.isClient && window.matchMedia) {
      this.toggleDarkMode(this.detectPrefered());
    }
  },
};
</script>

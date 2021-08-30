<template>
  <button
    class="icon"
    @click="handleClick"
    :aria-label="$t('display-mode.toggle-dark-mode')"
    :title="$t('display-mode.toggle-dark-mode')"
  >
    <ThemeLightDarkIcon class="icon-lg" />
  </button>
</template>

<script>
import ThemeLightDarkIcon from 'vue-material-design-icons/ThemeLightDark'

export const DARK_MODE = 'dark';

export default {
  components: {
    ThemeLightDarkIcon,
  },

  data() {
    return {
      isDarkMode: false,
    };
  },

  methods: {
    handleClick() {
      const hasDarkMode = document.documentElement.classList.contains(DARK_MODE);
      return this.toggleDarkMode(!hasDarkMode);
    },

    toggleDarkMode(shouldBeDark) {
      document.documentElement.classList.toggle(DARK_MODE, shouldBeDark);
      this.isDarkMode = shouldBeDark;
      this.writeToStorage(shouldBeDark);
      return shouldBeDark;
    },

    detectPrefered() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    hasInStorage() {
      return localStorage.getItem(DARK_MODE) !== null;
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(DARK_MODE, prefersDark ? 'true' : 'false');
    },

    getFromStorage() {
      return localStorage.getItem(DARK_MODE) === 'true';
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

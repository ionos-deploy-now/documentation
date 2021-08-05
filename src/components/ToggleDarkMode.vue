<template>
  <button
    @click="handleClick"
    :aria-label="$t('display-mode.toggle-dark-mode')"
    :title="$t('display-mode.toggle-dark-mode')"
  >
    <slot :dark="isDarkMode" />
  </button>
</template>

<script>
export const LIGHTS_OUT = 'lights-out';

export default {
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

<style></style>

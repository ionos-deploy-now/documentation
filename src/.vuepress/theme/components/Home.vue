<template>
  <div class="home">
    <div class="grid md:grid-cols-5 items-center md:gap-2">
      <div class="col-span-3 background">
        <div class="relative z-10">
          <h1 class="flex-grow text-4xl md:text-6xl">
            <div>Deploy smarter. Deploy faster.</div>
            <div class="pt-4 text-accent">Deploy <b>Now</b>.</div>
          </h1>
          <p class="flex-grow text-xl my-8 md:my-16">
            {{ data.slogan }}
          </p>
          <NavLink
            class="text-white text-xl rounded-md p-4 bg-accent"
            :item="actionLink"
          />
        </div>
      </div>
      <div class="col-span-2 md:my-16">
        <img src="/github-connected.png" />
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-16 py-8 border-t-2 border-b-2">
      <div v-for="(feature, index) in data.features" :key="index">
        <div class="text-xl md:text-2xl">{{ feature.title }}</div>
        <p class="text-sm md:text-base">{{ feature.details }}</p>
      </div>
    </div>

    <Content class="py-8" />

    <div v-if="data.footer" class="flex justify-center">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">

.background
  position relative
  &:before
    content ' '
    display block
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    z-index 0
    background url('/background-bright-mode.svg')
    background-size cover
    opacity 0.1

.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
</style>

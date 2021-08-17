<template>
  <div class="relative bg-img-dots">
    <img
      v-for="logo in logos"
      class="logo absolute pointer-events-none z-0"
      :class="{[logo]: true}"
      :src="logoPath(logo)"
      :alt="`${logo} logo`"
    />

    <div class="container">
      <div class="flex-center flex-col space-y-4 mx-auto my-32 max-w-[600px]">
        <div class="text-sm text-ui-primary uppercase">
          More than static
        </div>
        <div class="text-4xl text-center font-bold pb-4 z-1">
          The home for your Jamstack project or Single Page Application
        </div>
        <div class="grid grid-cols-2 gap-4">
          <g-link class="btn btn-primary" to="/docs/framework-samples/">
            Deploy a sample
          </g-link>
          <a class="btn btn-secondary border-ui-border" href="https://ionos.space">
            <ExternalLinkIcon class="icon" size="1x" />
            Sign up free
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons';

export default {
  components: {
    ExternalLinkIcon,
  },
  data() {
    return {
      logos: ['angular', 'hexo', 'jekyll', 'next', 'nuxt', 'react', 'vue'],
    };
  },
  methods: {
    logoPath(name) {
      return `/logos/${name}.svg`;
    },
  },
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 60px;
}

.angular {
  top: 75%;
  left: 35%;
}

.hexo {
  top: 80%;
  left: 65%;
}

.jekyll {
  top: 55%;
  left: 20%;
}

.next {
  top: 30%;
  left: 15%;
}

.nuxt {
  top: 10%;
  left: 35%;
}

.react {
  top: 50%;
  left: 80%;
}

.vue {
  top: 20%;
  left: 70%;
}
</style>

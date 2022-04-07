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
        <div class="overline">
          {{ $t('home-samples.overline') }}
        </div>
        <h2 class="text-center font-semibold pb-4 z-1">
          {{ $t('home-samples.title') }}
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <g-link class="btn btn-primary" to="/docs/framework-samples/">
            {{ $t('home-samples.sample-button') }}
          </g-link>
          <a class="btn btn-secondary border-ui-border" href="https://ionos.space">
            <ExternalLinkIcon class="icon" decorative />
            {{ $t('home-samples.sign-up-button') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLinkIcon from 'vue-material-design-icons/OpenInNew'

export default {
  components: {
    ExternalLinkIcon,
  },
  data() {
    return {
      logos: ['angular', 'hexo', 'jekyll', 'laravel', 'nuxt', 'symfony', 'vue'],
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

.laravel {
  top: 30%;
  left: 15%;
}

.nuxt {
  top: 10%;
  left: 35%;
}

.symfony {
  top: 50%;
  left: 80%;
}

.vue {
  top: 20%;
  left: 70%;
}
</style>

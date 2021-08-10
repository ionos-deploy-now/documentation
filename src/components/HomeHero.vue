<template>
  <header class="container flex bg-ui-background mt-4">
    <div class="grid md:grid-cols-7 md:gap-2 px-8 md:px-20">
      <div class="col-span-4 relative bg-img-dots">
        <div class="relative z-10">
          <h1 class="flex-grow">
            <div class="text-2xl md:text-4xl font-normal">
              <div>{{ $t('home-hero.deploy-smarter') }}</div>
              <div>{{ $t('home-hero.deploy-faster') }}</div>
            </div>
            <DeployNow class="text-4xl md:text-6xl" />
          </h1>
          <p class="flex-grow md:text-xl my-8 md:my-16">
            {{ $t('home-hero.description') }}
          </p>
        </div>
        <div class="flex justify-start space-x-8">
          <g-link to="/docs/" class="btn btn-hero btn-primary">
            {{ $t('home-hero.getting-started') }}
          </g-link>
          <a href="https://ionos.space" target="_blank" class="btn btn-hero">
            <ExternalLinkIcon class="icon" size="1x" />
            <span>{{ $t('home-hero.deploy-now') }}</span>
          </a>
        </div>
      </div>
      <div class="hidden md:flex md:col-span-3">
        <img src="/github-connected.png" class="object-contain" />
      </div>
    </div>
  </header>
</template>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons';
import DeployNow from '@/components/DeployNow';

export default {
  components: {
    ExternalLinkIcon,
    DeployNow,
  },
};
</script>

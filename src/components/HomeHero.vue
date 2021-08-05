<template>
  <header class="flex bg-ui-background mt-4">
    <div class="grid md:grid-cols-7 md:gap-2 px-8 md:px-20">
      <div class="col-span-4 background">
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
        <div class="flex justify-start">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            {{ $t('home-hero.getting-started') }}
          </g-link>
        </div>
      </div>
      <div class="hidden md:flex md:col-span-3">
        <img src="/github-connected.png" class="object-contain" />
      </div>
    </div>
  </header>
</template>

<script>
import DeployNow from '@/components/DeployNow';

export default {
  components: {
    DeployNow
  }
};
</script>

<style scoped lang="postcss">
.background {
  position: relative;
}

.background::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: url('/background-bright-mode.svg');
  background-size: cover;
  opacity: 0.1;
}
</style>

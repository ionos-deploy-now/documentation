<template>
  <div class="container bg-ui-background mt-4 lg:mt-8">
    <div class="two-column-layout">
      <div class="relative bg-img-dots">
        <h1 class="mb-0 text-ui-primary mt-8">{{ $t('home-hero.h1') }}</h1>
        <h2>{{ $t('home-hero.h2') }}</h2>
        <p class="mb-8 mt-4 md:text-xl">{{ $t('home-hero.description') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto <md:max-w-[400px]">
        <g-link to="/docs/" class="card invert" style="background-color: #11C7E6">
          <div class="title py-4 lg:pt-10">{{ $t('home-hero.getting-started.title') }}</div>
          <div>{{ $t('home-hero.getting-started.text') }}</div>
        </g-link>
        <g-link to="/docs/framework-samples/" class="card invert">
          <div class="title py-4 lg:pt-10">{{ $t('home-hero.deploy-sample.title') }}</div>
          <div>{{ $t('home-hero.deploy-sample.text') }}</div>
        </g-link>
        <g-link to="/blog/" class="card invert" style="background-color: #003D8F">
          <div class="title py-4 lg:pt-10">{{ $t('home-hero.blog.title') }}</div>
          <div>{{ $t('home-hero.blog.text') }}</div>
        </g-link>
      </div>
    </div>

    <div class="flex justify-center items-center pb-8 pt-12 md:pt-16">
      <a
        href="https://www.producthunt.com/posts/deploy-now?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-deploy-now"
        target="_blank"
        rel=”noreferrer”
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=299768&theme=light"
          alt="Deploy Now - Git push your web project and go live instantly | Product Hunt"
          style="width: 250px; height: 54px;"
          width="250"
          height="54"
        />
      </a>
    </div>
  </div>
</template>

<script>
import DeployNow from '~/components/DeployNow';

export default {
  components: {
    DeployNow,
  },
};
</script>

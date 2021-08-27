<template>
  <div class="container-secondary">
    <div class="container">
      <div class="two-column-layout py-8">
        <div class="my-auto space-y-6">
          <div class="overline" v-html="$t('home-workflow.overline')"></div>
          <h2 class="font-semibold" v-html="$t('home-workflow.title')"></h2>
          <div>
            {{ $t('home-workflow.text') }}
          </div>
          <g-link class="btn btn-primary" to="/docs/staging-deployments/">
            {{ $t('home-workflow.button') }}
          </g-link>
        </div>
        <div>
          <g-image src="/github-workflow.png" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="container-secondary">
    <div class="container">
      <div class="two-column-layout py-8">
        <div>
          <iframe
            class="mx-auto"
            width="100%"
            height="315"
            src="https://www.youtube-nocookie.com/embed/wpELzwYFxQw?controls=0&modestbranding=1"
            title="Deploy Now Video"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope"
            allowfullscreen></iframe>
        </div>
        <div class="my-auto space-y-6">
          <div class="overline">
            {{ $t('home-features.overline') }}
          </div>
          <h2 class="font-semibold" v-html="$t('home-features.title')"></h2>
          <div>
            {{ $t('home-features.text') }}
          </div>
          <g-link class="btn btn-primary" to="/docs">
            {{ $t('home-features.button') }}
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

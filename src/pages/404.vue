<template>
  <Layout>
    <div class="container">
      <div class="pt-8 md:pt-16">
        <h1 class="text-center font-semibold text-4xl text-ui-primary">
          {{ $t('404.title') }}
        </h1>
      </div>
      <div class="mb-10 flex items-center justify-center">
        <g-link to="/" class="font-semibold border-b border-ui-primary text-xl">
          {{ $t('404.back') }}
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404 - Nothing here',
  },
};
</script>

<template>
  <div>
    <g-link class="flex-inline-center text-ui-primary font-semibold hover:text-ui-typo" to="/blog">
      <ArrowLeftIcon class="icon" decorative />
      {{ $t('blog.back') }}
    </g-link>
    <g-image v-if="page.header" :src="page.header" fit="contain" class="my-8 rounded-lg" height="400" />
    <div class="content" v-html="page.content" />
  </div>
</template>

<script>
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft'

export default {
  name: 'Blog',
  components: {
    ArrowLeftIcon,
  },
  props: {
    page: Object,
  },
};
</script>

<template>
  <div class="px-4 py-3 border-t-1 border-ui-border">
    <div class="flex flex-grow items-center justify-between">
      <div class="flex flex-grow items-center">
        <a href="https://www.ionos.de/impressum" target="_blank" class="mx-3 md:mx-6">{{ $t('footer.imprint') }}</a>
        <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" class="mx-3 md:mx-6">{{
          $t('footer.privacy-policy')
        }}</a>
        <a href="https://www.ionos.de/terms-gtc/terms" target="_blank" class="mx-3 md:mx-6">{{
          $t('footer.terms-and-conditions')
        }}</a>
      </div>
      <div class="mx-3 md:mx-6">&copy; {{ year }} {{ $t('footer.company-name') }}</div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    meta() {
      return this.$static.metadata;
    },
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

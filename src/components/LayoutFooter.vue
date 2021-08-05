<template>
  <div class="px-4 py-2 border-t-1 border-ui-border">
    <div class="flex flex-grow items-center justify-between">
      <div class="flex flex-grow items-center">
        <div class="mr-3">{{ $t('footer.imprint') }}</div>
        <div class="mr-3">{{ $t('footer.privacy-policy') }}</div>
        <div class="mr-3">{{ $t('footer.terms-of-service') }}</div>
      </div>
      <div>&copy; {{ year }} {{ $t('footer.company-name') }}</div>
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

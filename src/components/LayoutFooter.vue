<template>
  <div class="p-3 border-t-1 border-ui-border">
    <div class="flex items-center justify-between text-sm">
      <div class="mx-2 md:mx-6 hidden">
        <div class="oao-statuspage-overall-status"></div>
      </div>
      <div class="flex items-center">
        <a class="p-2" href="https://www.ionos.de/impressum" target="_blank">
          {{ $t('footer.imprint') }}
        </a>
        <a class="p-2" href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank">
          {{ $t('footer.privacy-policy') }}
        </a>
        <a class="p-2" href="https://www.ionos.de/terms-gtc/terms" target="_blank">
          {{ $t('footer.terms-and-conditions') }}
        </a>
      </div>
      <div class="mx-2 md:mx-6">
        &copy; {{ year }} <span>{{ $t('footer.company-name') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

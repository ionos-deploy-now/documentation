<template>
  <div class="px-4 py-2 border-t-1 border-ui-border">
    <div class="flex flex-grow items-center justify-between">
      <div class="flex flex-grow items-center">
        <div class="mr-3">Imprint</div>
        <div class="mr-3">Privacy Policy</div>
      </div>
      <div>&copy; 2021 IONOS SE</div>
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
  },
};
</script>

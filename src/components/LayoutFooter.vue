<template>
  <div class="py-2 border-t-2 border-ui-primary">
    <div class="container">
      <div class="flex flex-grow items-center">
        <div>
          <div class="mr-2">Imprint</div>
          <div class="mr-2">Privacy Policy</div>
        </div>
        <div>&copy; 2021 IONOS SE</div>
      </div>
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

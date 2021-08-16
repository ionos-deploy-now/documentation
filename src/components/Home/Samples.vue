<template>
  <div class="container">
    <div class="flex-center flex-col space-y-4 mx-auto my-32 max-w-[600px]">
      <div class="text-sm text-ui-primary uppercase">
        More than static
      </div>
      <div class="text-4xl text-center font-bold pb-4">
        The home for your Jamstack project or Single Page Application
      </div>
      <div class="grid grid-cols-2 gap-4">
        <g-link class="btn btn-primary" to="/docs/framework-samples/">
          Deploy a sample
        </g-link>
        <a class="btn btn-secondary border-ui-border" href="https://ionos.space">
          <ExternalLinkIcon class="icon" size="1x" />
          Sign up free
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons';

export default {
  components: {
    ExternalLinkIcon,
  }
}
</script>

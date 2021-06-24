<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: '3em'
    },
    height: {
      type: [Number, String],
      default: '3em'
    },
    viewBox: {
      default: "0 0 100 100",
      type: String,
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>

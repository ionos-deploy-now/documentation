<template>
  <svg ref="svg" width="100%" height="100%" viewBox="0 0 50 50">
    <circle
      v-for="dot in dots"
      :cx="dot.x"
      :cy="dot.y"
      :r="size"
      fill="#1b365c"
    />
  </svg>
</template>

<script>
export default {
  name: 'Dots',
  props: {
    size: {
      type: Number,
      default: 1,
    },
    offsetX: {
      type: Number,
      default: 2,
    },
    offsetY: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      dots: [],
    };
  },
  methods: {
    init() {
      for (let i = 0; i < 15; i++) {
        this.dots.push(this.createDot(i * 2 * this.size, i * 2 * this.size));
      }
    },
    createDot(x = 0, y = 0) {
      return { x: this.offsetX + x, y: this.offsetY + y };
    },
  },
  mounted() {
    this.init();
    console.log(this.$refs.svg);
  },
};
</script>

<style scoped>

</style>

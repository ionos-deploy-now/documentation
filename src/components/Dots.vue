<template>
  <div ref="wrapper">
    <svg ref="svg" :width="width" :height="height" :viewBox="viewBox">
      <circle
        v-for="dot in dots"
        :cx="dot.x"
        :cy="dot.y"
        :r="size"
        fill="#1b365c"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Dots',
  props: {
    size: {
      type: Number,
      default: 2,
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
      width: 1,
      height: 1,
      viewX: 100,
      viewY: 100,
    };
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
  },
  methods: {
    init() {
      this.updateBounds()
      for (let i = 0; i < 50; i++) {
        this.dots.push(this.createDot(i * 2 * this.size, i * 2 * this.size));
      }
    },
    createDot(x = 0, y = 0) {
      return {
        x: `${(x) + this.offsetX}%`,
        y: `${(y) + this.offsetY}%`,
      };
    },
    updateBounds() {
      this.width = this.$refs.wrapper.offsetWidth;
      this.height = this.$refs.wrapper.offsetHeight;
    },
  },
  mounted() {
    this.init();
    window.addEventListener('resize', this.updateBounds)
  },
  destroyed() {
    window.removeEventListener('resize', this.updateBounds)
  },
};
</script>

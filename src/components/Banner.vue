<template>
  <div v-show="display" class="flex-center px-4 py-3 text-white bg-midnight">
    <slot name="icon" />
    <slot name="content" />
    <CloseIcon class="icon cursor-pointer" @click="close" />
  </div>
</template>

<script>
import CloseIcon from "vue-material-design-icons/Close";

const isHidden = "hidden";

export default {
  name: "Banner",
  components: {
    CloseIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      display: false,
    };
  },
  computed: {
    localStorageKey() {
      return `${this.name}-banner`;
    },
  },
  methods: {
    close() {
      this.display = false;
      if (process.isClient && localStorage) {
        localStorage.setItem(this.localStorageKey, isHidden);
      }
    },
  },
  created() {
    if (process.isClient && localStorage) {
      if (localStorage.getItem(this.localStorageKey) === isHidden) {
        this.close();
      } else {
        this.display = true;
      }
    }
  },
};
</script>

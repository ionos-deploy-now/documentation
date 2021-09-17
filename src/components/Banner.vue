<template>
  <div v-show="display" class="flex-center px-4 py-3 text-white bg-midnight">
    <slot name="icon" />
    <div class="flex-grow ml-4">
      <div class="flex justify-between align-start">
        <span class="font-semibold">{{ title }}</span>
        <CloseIcon class="icon cursor-pointer" @click="close" />
      </div>
      <div class="flex">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close';

const isHidden = 'hidden';

export default {
  name: 'Banner',
  components: {
    CloseIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: String,
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
        this.close()
      } else {
        this.display = true;
      }
    }
  },
};
</script>

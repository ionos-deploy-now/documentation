<template lang="html">
  <div>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style lang="css">
ul.tabs__header {
  display: block;
  list-style: none;
  padding: 0;
  box-shadow: 0 -1px 0 var(--color-ui-border) inset;
}

ul.tabs__header > li {
  padding: 2px 6px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}

.tab {
  display: inline-block;
  width: 100%;
  border-radius: 10px;
}

li.tab__selected {
  border-bottom: 2px solid var(--color-primary);;
  color: var(--color-primary);;
}
</style>
<template>
  <div @keydown.down="increment" @keydown.up="decrement" @keydown.enter="go"
    class="relative transistion-all">
    <SearchIcon size="1.5x" v-show="!focused" class="icon flex-center !md:hidden" @click="focusSearch" />
    <label class="relative md:flex-center md:opacity-100" :class="searchLabelClass">
      <span class="sr-only">{{ $t('search.title') }}</span>
      <SearchIcon size="1.25x" class="icon absolute left-3 inset-3 z-1 text-ui-typo" />
      <input
        ref="input"
        type="search"
        :value="query"
        class="block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background md:min-w-[250px] lg:min-w-[400px]"
        :class="{ 'rounded-b-none': showResult }"
        :placeholder="$t('search.placeholder')"
        @focus="setSearchFocused(true)"
        @blur="setSearchFocused(false)"
        @input="onInput"
        @change="onChange"
      />
    </label>
    <div
      v-if="showResult"
      class="fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar"
      style="max-height: calc(100vh - 120px)"
    >
      <ul class="px-4 py-2 m-0">
        <li v-if="results.length === 0" class="px-2" v-html="$t('search.no-results', { query })" />

        <li
          v-else
          v-for="({ item }, index) in results"
          :key="item.url"
          @mouseenter="focusIndex = index"
          @mousedown="go"
          class="border-ui-sidebar"
          :class="{ 'border-b': index + 1 !== results.length }"
        >
          <g-link
            :to="item.url"
            class="block p-2 -mx-2 text-base font-bold rounded-lg"
            :class="{ 'bg-ui-sidebar text-ui-primary': focusIndex === index }"
          >
            <span v-if="item.value === item.title">
              {{ item.value }}
            </span>

            <span v-else class="flex items-center">
              {{ item.title }}
              <ChevronRightIcon size="1x" class="mx-1" />
              <span class="font-normal opacity-75">{{ item.value }}</span>
            </span>
          </g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<static-query>
query Search {
  allMarkdownPage {
    edges {
      node {
        id
        path
        title
        headings {
          depth
          value
          anchor
        }
      }
    }
  }
}
</static-query>

<script>
import { mapState, mapActions } from 'vuex';
import { ChevronRightIcon, SearchIcon } from 'vue-feather-icons';
import Fuse from 'fuse.js';

export default {
  components: {
    ChevronRightIcon,
    SearchIcon,
  },

  data() {
    return {
      query: '',
      focusIndex: -1,
      results: [],
    };
  },
  computed: {
    ...mapState({ focused: 'searchFocused' }),
    headings() {
      const result = [];
      const allPages = this.$static.allMarkdownPage.edges.map(edge => edge.node);

      // Create the array of all headings of all pages.
      allPages.forEach(page => {
        page.headings.forEach(heading => {
          result.push({
            ...heading,
            path: page.path,
            title: page.title,
            url: `${page.path}${heading.anchor}`,
          });
        });
      });

      return result;
    },
    showResult() {
      // Show results, if the input is focused and the query is not empty.
      return this.focused && this.query.length > 0;
    },
    searchLabelClass() {
      return {
        '<md:hidden': !this.focused,
        '<md:opacity-0': !this.focused,
      };
    },
  },
  methods: {
    ...mapActions({ setSearchFocused: 'setSearchFocused' }),
    increment() {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++;
      }
    },
    decrement() {
      if (this.focusIndex >= 0) {
        this.focusIndex--;
      }
    },
    focusSearch() {
      this.setSearchFocused(true);
      this.$nextTick(() => {
        this.$refs.input.focus();
      })
    },
    updateSearchResults() {
      const fuse = new Fuse(this.headings, {
        keys: ['value'],
        threshold: 0.25,
      });
      this.results = fuse.search(this.query).slice(0, 15);
    },
    go() {
      if (this.results.length === 0) {
        return;
      }

      // If we don't have focus on a result, just navigate to the first one.
      const result = this.focusIndex === -1 ? this.results[0] : this.results[this.focusIndex];
      this.$router.push(result.item.url);

      // Unfocus the input and reset the query.
      this.$refs.input.blur();
      this.query = '';
    },
    onInput(event) {
      this.focusIndex = -1;
      this.query = event.target.value;
      this.updateSearchResults();
    },
    onChange(event) {
      this.query = event.target.value;
      this.updateSearchResults();
    },
  },
};
</script>

<template>
  <div class="mt-8 sm:px-4 sm:pb-16 md:mt-0 md:px-6 md:pt-12 lg:px-8 border-ui-border">
    <h3 class="pt-0 mt-0 text-sm tracking-wide uppercase border-none">
      {{ $t('on-this-page.title') }}
    </h3>
    <div>
      <ul>
        <li
          v-for="(heading, index) in headings"
          :key="`${page.path}${heading.anchor}`"
          :class="listItemClass(heading, index)"
        >
          <g-link
            :to="`${page.path}${heading.anchor}`"
            class="relative flex items-center py-1 text-sm transition transform hover:translate-x-1"
            :class="linkClasses(heading)"
          >
            <span
              class="absolute w-1 h-4 -ml-3 opacity-0 bg-ui-primary transition transform scale-0 origin-center"
              :class="{ 'opacity-100 scale-100': activeAnchor === heading.anchor }"
            ></span>
            {{ heading.value }}
          </g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAnchor: '',
      observer: null,
    };
  },

  computed: {
    page() {
      return this.$page.markdownPage;
    },
    headings() {
      return this.page.headings.filter(h => h.depth > 1);
    },
  },

  watch: {
    $route() {
      if (process.isClient && window.location.hash) {
        this.activeAnchor = window.location.hash;
      }

      // Clear the current observer.
      if (this.observer) {
        this.observer.disconnect();
      }

      // And create another one for the next page.
      //this.$nextTick(this.initObserver);
    },
  },

  methods: {
    observerCallback(entries) {
      // This early return fixes the jumping
      // of the bubble active state when we click on a link.
      // There should be only one intersecting element anyways.
      if (entries.length > 1) {
        return;
      }

      const id = entries[0].target.id;

      // We want to give the link of the intersecting
      // headline active and add the hash to the url.
      if (id) {
        this.activeAnchor = '#' + id;

        if (history.replaceState) {
          history.replaceState(null, null, '#' + id);
        }
      }
    },

    initObserver() {
      this.observer = new IntersectionObserver(this.observerCallback, {
        // This rootMargin should allow intersections at the top of the page.
        rootMargin: '0px 0px 99999px',
        threshold: 1,
      });

      const elements = document.querySelectorAll('.content h2, .content h3, .content h4, .content h5, .content h6');

      for (let i = 0; i < elements.length; i++) {
        this.observer.observe(elements[i]);
      }
    },

    listItemClass(heading, index) {
      return {
        'border-t border-dashed border-ui-border pt-2 mt-2': index > 0 && heading.depth === 2,
        'font-semibold': heading.depth === 2,
        [`depth-${heading.depth}`]: true,
      };
    },

    linkClasses(heading) {
      return {
        'pl-2': heading.depth === 3,
        'pl-3': heading.depth === 4,
        'pl-4': heading.depth === 5,
        'pl-5': heading.depth === 6,
        'font-semibold text-ui-primary': this.activeAnchor === heading.anchor,
      };
    },
  },

  mounted() {
    if (process.isClient) {
      if (window.location.hash) {
        this.activeAnchor = window.location.hash;
      }
      this.$nextTick(this.initObserver);
    }
  },
};
</script>

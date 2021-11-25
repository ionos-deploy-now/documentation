<template>
  <div ref="sidebar" class="px-4 pt-8 lg:pt-12">
    <div
      v-for="(section, index) in sidebar.sections"
      :key="section.title"
      :class="{ 'border-b': index < sidebar.sections.length - 1 }"
      class="pb-4 mb-4 border-ui-border"
    >
      <h3 class="pt-0 mt-0 mb-1 text-sm tracking-tight uppercase border-none">
        {{ section.title }}
      </h3>

      <ul class="max-w-full pl-2 mb-0">
        <li
          v-for="page in findPages(section)"
          :id="page.path"
          :key="page.path"
          :class="anchorClass(page)"
          @mousedown="$emit('navigate')"
        >
          <g-link :to="page.path" class="flex items-center py-1 font-semibold">
            <span
              :class="{ 'opacity-100 scale-100': markdownPage && markdownPage.path === page.path }"
              class="absolute w-1 h-4 -ml-3 opacity-0 bg-ui-primary transition transform scale-0 origin-center"
            ></span>
            {{ page.title }}
          </g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<static-query>
query Sidebar {
  metadata {
    settings {
      nav {
        links {
          path
          title
        }
      }
      sidebar {
        name
        sections {
          title
          items
          external {
            title
            path
          }
        }
      }
    }
  }
  allMarkdownPage {
    edges {
      node {
        path
        title
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    markdownPage() {
      return this.$page?.markdownPage;
    },
    pages() {
      return this.$static.allMarkdownPage.edges.map(edge => edge.node);
    },
    sidebar() {
      return this.$static.metadata.settings.sidebar.find(sidebar => sidebar.name === this.markdownPage?.sidebar || 'docs');
    },
    nav() {
      return this.$static.metadata.settings.nav.links;
    },
  },
  methods: {
    anchorClass({ path }) {
      return {
        'text-ui-primary': this.markdownPage?.path === path,
        'transition transform hover:translate-x-1 hover:text-ui-primary': !this.markdownPage?.path === path,
      };
    },
    findPages(section) {
      return section.items
        .map(link => this.pages.find(page => page && page.path === link) || this.nav.find(nav => nav.path === link))
        .filter(x => x)
        .concat(section.external || []);
    },
  },
};
</script>

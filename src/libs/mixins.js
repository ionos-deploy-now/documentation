export const sidebar = {
  methods: {
    stickySidebarStyle(headerHeight) {
      return {
        top: `${headerHeight}px`,
        height: `calc(100vh - ${headerHeight}px)`,
      };
    },
  }
}

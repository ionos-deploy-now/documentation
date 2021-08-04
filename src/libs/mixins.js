export const sidebar = {
  methods: {
    stickySidebarStyle(headerHeight, footerHeight) {
      return {
        top: `${headerHeight}px`,
        height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`
      };
    }
  }
};

/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import "material-design-icons-iconfont/dist/material-design-icons.css";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // apply debugging mode
  Vue.config.devtools = true;
  // apply enhancements for this site
  Vue.use(Vuetify, {
    iconfont: "md",
  });
};

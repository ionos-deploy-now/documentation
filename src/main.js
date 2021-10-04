import Vuex from 'vuex';
import createStore from '~/store';
import DefaultLayout from '~/layouts/Default.vue';
import 'prism-themes/themes/prism-material-oceanic.css';
import 'gridsome-plugin-remark-container/themes/default.css';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-600.css';
import '@fontsource/open-sans/latin-800.css';
import '~/assets/styles/app.scss';

export default function (Vue, { router, head, appOptions }) {
  Vue.use(Vuex);
  appOptions.store = createStore();

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add meta data to global head
  //head.link.push({
  //  rel: 'preconnect',
  //  href: 'https://fonts.gstatic.com',
  //});
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Overpass:wght@100;300&display=swap',
  });
  head.meta.push({
    name: 'google-site-verification',
    content: 'UtLaJ4v0UZBDPJVc8DqCyiUPSSz9TtMroKmflhpH2eo'
  })

  // Add meta data to each page
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}

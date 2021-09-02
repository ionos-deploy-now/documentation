export const frontendServicesUrl = 'https://frontend-services.ionos.com/t/tag/IONOS/deploy_now.js';

export default class FrontendServices {
  constructor() {
    this.initOAONamespace();
  }

  initOAONamespace() {
    window.OAO = window.OAO || {};
    window.OAO.q = window.OAO.q || {};
    window.OAO.q.c = window.OAO.q.c || [];
    window.OAO.q.navigation = window.OAO.q.navigation || [];
    window.OAO.q.pageintegration = window.OAO.q.pageintegration || [];
  }
}

<template>
  <div class="footer md:grid md:grid-cols-5">
    <div class="col-start-2 col-span-3 grid grid-cols-1 gap-4 <md:gap-8 md:grid-cols-4 md:gap-16">
      <div class="space-y-4">
        <div class="font-bold">Docs</div>
        <g-link to="/docs/">Introduction</g-link>
        <g-link to="/docs/deploy-static-sites/">Deploy a Static Site</g-link>
        <g-link to="/docs/deploy-php-apps/">Deploy a PHP App</g-link>
        <g-link to="/docs/github-actions-customization/">Build configuration</g-link>
        <g-link to="/docs/deployment-configuration/">Deployment configuration</g-link>
        <g-link to="/docs/runtime-configuration/">Runtime configuration</g-link>
        <g-link to="/docs/git-integration/">Github Integration</g-link>
        <g-link to="/docs/staging-deployments/">Staging Deployments</g-link>
        <g-link to="/docs/domain-tls/">Domains &amp; TLS/SSL</g-link>
        <g-link to="/docs/framework-samples/">Framework samples</g-link>
      </div>
      <div class="space-y-4">
        <div class="font-bold">Customer Shops</div>
        <a href="https://www.ionos.com/hosting/deploy-now" rel="noreferrer" target="_blank">United States</a>
        <a href="https://www.ionos.co.uk/hosting/deploy-now" rel="noreferrer" target="_blank">United Kingdom</a>
        <a href="https://www.ionos.de/hosting/deploy-now" rel="noreferrer" target="_blank">Germany</a>
        <a href="https://www.ionos.ca/hosting/deploy-now" rel="noreferrer" target="_blank">Canada</a>
        <a href="https://www.ionos.es/alojamiento/deploy-now" rel="noreferrer" target="_blank">Spain</a>
        <a href="https://www.ionos.fr/hebergement/deploy-now" rel="noreferrer" target="_blank">France</a>
        <a href="https://www.ionos.it/hosting/deploy-now" rel="noreferrer" target="_blank">Italy</a>
        <a href="https://www.ionos.mx/alojamiento/deploy-now" rel="noreferrer" target="_blank">Mexico</a>
      </div>
      <div class="space-y-4">
        <div class="font-bold">Company</div>
        <a href="https://www.ionos.com/about" rel="noreferrer" target="_blank">
          About IONOS
        </a>
        <a href="https://www.ionos.com/agency-partner" rel="noreferrer" target="_blank">
          IONOS Agency Partner Programm
        </a>
        <a href="https://www.ionos.com/terms-gtc/general-terms-and-conditions/" rel=”noreferrer” target="_blank">
          Terms and Conditions
        </a>
        <a href="https://www.ionos.de/terms-gtc/terms-privacy" rel=”noreferrer” target="_blank">
          Privacy Policy
        </a>
        <a href="https://www.ionos.de/impressum" rel=”noreferrer” target="_blank">
          Legal Information
        </a>
        <div class="font-bold">Assets</div>
        <a href="https://www.ionos.de/hosting/kostenloses-hosting" rel="noreferrer" target="_blank">
          Is Deploy Now for free?
        </a>
        <a href="https://www.ionos.com/hosting/jamstack" rel="noreferrer" target="_blank">What is the Jamstack?</a>
        <g-link target="_blank" to="/about-us/">About Deploy Now</g-link>
        <g-link target="_blank" to="/blog/">Blog</g-link>
        <g-link target="_blank" to="/docs/faq/">Frequently Asked Questions</g-link>
      </div>
      <div class="space-y-4">
        <a href="https://www.ionos.com/" rel="noreferrer" target="_blank">
          <img
            alt="ionos logo"
            src="https://ce1.uicdn.net/2dd/1690fa2f62f6ed55e11b6c594145c/webapp/vi-logo.svg"
            width="150"
          >
        </a>
        <div>&copy; {{ year }} <span>{{ $t('footer.company-name') }}</span></div>
        <a
          class="flex items-center space-x-2"
          href="https://www.ionos.com/environment"
          rel="noreferrer"
          target="_blank"
        >
          <img
            class="inline"
            alt="green energy logo"
            src="https://ce1.uicdn.net/347/e8f7028afa25836bf517e5414ba5f/frontend-applications-common/vi-green-energy.svg"
            width="50"
          >
          <span>Environment</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <a class="inline-flex" href="javascript:void(0);" @click.prevent="onClick">
    <slot />
    <form
      ref="jobSearchForm"
      method="post"
      action="https://jobs.ionos.de/karriere/jobs/jobsuche"
      target="_blank"
      class="hidden"
    >
      <input type="hidden" name="tx_cisocareer_jobsearchform[textSearch]" value="[Deploy Now]">
      <input type="hidden" name="tx_cisocareer_jobsearchform[categories][]" value="11">
      <input type="hidden" name="tx_cisocareer_jobsearchform[locationName][]" value="Karlsruhe">
    </form>
  </a>
</template>

<script>
export default {
  name: 'JobSearchLink',
  methods: {
    onClick() {
      this.$refs.jobSearchForm.submit();
    },
  },
};

/*
tx_cisocareer_jobsearchform[__referrer][@extension]: CisoCareer
tx_cisocareer_jobsearchform[__referrer][@controller]: JobOffer
tx_cisocareer_jobsearchform[__referrer][@action]: find
tx_cisocareer_jobsearchform[__referrer][arguments]: YTo1OntzOjExOiJjYXJlZXJMZXZlbCI7YToxOntpOjA7czowOiIiO31zOjE2OiJtb2RlT2ZFbXBsb3ltZW50IjthOjE6e2k6MDtzOjg6ImZ1bGx0aW1lIjt9czoxMDoidGV4dFNlYXJjaCI7czoxMDoiRGVwbG95IE5vdyI7czoxMDoiY2F0ZWdvcmllcyI7YToxOntpOjA7czoyOiIxMSI7fXM6MTI6ImxvY2F0aW9uTmFtZSI7YToxOntpOjA7czo5OiJLYXJsc3J1aGUiO31972554324ca3d0d3240d13c65e81b88af0715fb6c
tx_cisocareer_jobsearchform[__referrer][@request]: {"@extension":"CisoCareer","@controller":"JobOffer","@action":"find"}61bc2c5c282999cc35d7e4a7cc9ae00dc66e2ea2
tx_cisocareer_jobsearchform[__trustedProperties]: {"careerLevel":[1],"modeOfEmployment":[1],"textSearch":1,"categories":[1],"locationName":[1]}c27df2fe22eba94504c6c1226a760cf24e159451
tx_cisocareer_jobsearchform[careerLevel][]:
tx_cisocareer_jobsearchform[modeOfEmployment][]: fulltime
tx_cisocareer_jobsearchform[textSearch]: [Deploy Now]
tx_cisocareer_jobsearchform[categories][]: 11
tx_cisocareer_jobsearchform[locationName][]: Karlsruhe
 */
</script>

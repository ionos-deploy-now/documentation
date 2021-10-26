<template>
  <a class="inline-flex" href="javascript:void(0);" @click.prevent="onClick">
    <slot />
    <form
      ref="jobSearchForm"
      method="post"
      action="https://jobs.ionos.de/career/all-jobs/job-search"
      target="_blank"
      class="hidden"
    >
      <input type="hidden" name="tx_cisocareer_jobsearchform[textSearch]" value="[Deploy Now]">
      <input type="hidden" name="tx_cisocareer_jobsearchform[categories][]" value="">
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
</script>

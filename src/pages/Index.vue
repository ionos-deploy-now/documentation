<template>
  <Layout>
    <HomeHero />
    <HomeFeatures />
    <HomeSamples />
    <HomeWorkflow />
    <HomeTeam />
  </Layout>
</template>

<script>
import HomeHero from '~/components/Home/Hero';
import HomeFeatures from '~/components/Home/Features';
import HomeSamples from '~/components/Home/Samples';
import HomeWorkflow from '~/components/Home/Workflow';
import HomeTeam from '~/components/Home/Team';
import { metaInfo } from '~/libs/seo';

export default {
  components: {
    HomeHero,
    HomeFeatures,
    HomeSamples,
    HomeWorkflow,
    HomeTeam,
  },

  metaInfo: metaInfo({
    title: 'Welcome',
    description: 'Deploy Now is a platform for building and hosting Static Site Generators and Single Page Applications on inhouse engineered IONOS infrastructure.',
  }),
};
</script>

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
import HomeHero from '~/components/home/Hero';
import HomeFeatures from '~/components/home/Features';
import HomeSamples from '~/components/home/Samples';
import HomeWorkflow from '~/components/home/Workflow';
import HomeTeam from '~/components/home/Team';
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
    title: 'Documentation',
    description: 'Deploy Now is a platform for building and hosting Static Site Generators and Single Page Applications on inhouse engineered IONOS infrastructure.',
  }),
};
</script>

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
    description: 'Build, stage & deploy static sites, single page applications and PHP apps directly via GitHub to IONOS infrastructure. Supports Hugo, Gatsby, Laravel, Symfony and many more.',
  }),
};
</script>

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
import HomeHero from '@/components/Home/Hero';
import HomeFeatures from '@/components/Home/Features';
import HomeSamples from '@/components/Home/Samples';
import HomeWorkflow from '@/components/Home/Workflow';
import HomeTeam from '@/components/Home/Team';

export default {
  components: {
    HomeHero,
    HomeFeatures,
    HomeSamples,
    HomeWorkflow,
    HomeTeam,
  },

  metaInfo() {
    const title = 'Welcome';
    const description = 'Deploy Now is a platform for building and hosting Static Site Generators and Single Page Applications on inhouse engineered IONOS infrastructure.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <HomeHero class="pt-8 md:pt-32" />
    <HomeFeatures class="pt-8 md:pt-16" />
    <div class="flex justify-center items-center py-4 md:py-8">
      <a
        href="https://www.producthunt.com/posts/deploy-now?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-deploy-now"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=299768&theme=light"
          alt="Deploy Now - Git push your web project and go live instantly | Product Hunt"
          style="width: 250px; height: 54px;"
          width="250"
          height="54"
        />
      </a>
    </div>
  </Layout>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeFeatures from '@/components/HomeFeatures';

export default {
  components: {
    HomeHero,
    HomeFeatures
  },

  metaInfo() {
    const title = 'Deploy Now documentation';
    const description = 'Documentation of Deploy Now';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    };
  }
};
</script>

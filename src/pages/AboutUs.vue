<template>
  <Layout>
    <div class="bg-img-dots">
      <div class="container">
        <div class="two-column-layout !gap-16 mt-8 lg:mt-16">
          <div class="space-y-4">
            <h1 v-html="$t('about-us.title')"></h1>
            <p>
              {{ $t('about-us.text') }}
            </p>
          </div>
        </div>

        <div class="two-column-layout !gap-16 mt-16">
          <div class="space-y-4">
            <h2>
              {{ $t('about-us.ionos-title') }}
            </h2>
            <p>
              {{ $t('about-us.ionos-text') }}
            </p>
          </div>

          <div class="space-y-4">
            <h2>
              {{ $t('about-us.feedback-title') }}
            </h2>
            <p v-html="$t('about-us.feedback-text')"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="mb-8">
        {{ $t('about-us.team-title') }}
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto">
        <TeamMember
          v-for="member in team"
          :key="member.name"
          v-bind="member"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allMarkdownPage(filter: { contentType: { eq: "team" } }) {
    edges {
      node {
        name
        role
        image
        github
        likes
      }
    }
  }
}
</page-query>

<script>
import TeamMember from '~/components/TeamMember';
import { metaInfo } from '~/libs/seo';

export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      jobOffers: [
        ['frontend', 'https://jobs.ionos.de/karriere/jobangebot/1561-web-application-frontend-developer-wmd-%5Bdeploy-now%5D'],
        ['full-stack', 'https://jobs.ionos.de/karriere/jobangebot/1562-web-application-full-stack-developer-wmd-%5Bdeploy-now%5D'],
        ['middleware', 'https://jobs.ionos.de/karriere/jobangebot/1563-web-application-middleware-developer-wmd-%5Bdeploy-now%5D'],
      ],
    };
  },
  computed: {
    team() {
      return this.$page.allMarkdownPage.edges
        .map(edge => edge.node)
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  metaInfo: metaInfo({
    title: 'About us',
    description: 'Questions or feedback? Get in touch with the team behind IONOS Deploy Now.',
  }),
};
</script>

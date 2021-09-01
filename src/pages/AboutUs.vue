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
          <div></div>
        </div>

        <div class="two-column-layout !gap-16 mt-8 lg:mt-16">
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
        <div v-for="member in team" :key="member.email" class="card light flex !p-0 max-w-[600px]">
          <img
            :src="`/team/${member.image}`"
            :alt="`Image of ${member.name}`"
            class="object-cover max-w-[200px]"
            style="background-color: #f5f5f5"
          />
          <div class="p-4 space-y-4">
            <div>
              <div class="title !pb-0">{{ member.name }}</div>
              <div>{{ member.role }}</div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm">
                <HeartIcon class="icon" decorative />
                {{ member.likes.join(', ') }}
              </div>
              <a class="flex items-center text-sm" :href="member.github">
                <GithubIcon class="icon" decorative />
                {{ stripProtocol(member.github) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TeamMembers from '@/assets/team.json';
import HeartIcon from 'vue-material-design-icons/HeartOutline'
import GithubIcon from 'vue-material-design-icons/Github'

export default {
  components: {
    GithubIcon,
    HeartIcon,
  },
  data() {
    return {
      team: Array.from(TeamMembers).sort((a, b) => a.name.localeCompare(b.name)),
    };
  },
  methods: {
    stripProtocol(str) {
      return str.replace(/https?:\/\//, '')
    },
  },
  metaInfo() {
    const title = 'About us';
    const description = 'Meet the team';

    return {
      title,
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

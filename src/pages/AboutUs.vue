<template>
  <Layout>
    <div class="bg-img-dots">
      <div class="container">
        <div class="two-column-layout mt-8 lg:mt-16">
          <div class="space-y-4">
            <div class="text-4xl font-bold leading-normal" v-html="$t('about-us.title')"></div>
            <div>
              {{ $t('about-us.text') }}
            </div>
          </div>
          <div></div>
        </div>

        <div class="two-column-layout mt-8 lg:mt-16">
          <div class="space-y-4">
            <div class="text-xl font-bold">
              {{ $t('about-us.ionos-title') }}
            </div>
            <div>
              {{ $t('about-us.ionos-text') }}
            </div>
          </div>
          <div class="space-y-4">
            <div class="text-xl font-bold">
              {{ $t('about-us.feedback-title') }}
            </div>
            <div>
              {{ $t('about-us.feedback-text') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-2xl font-bold mb-8">
        {{ $t('about-us.team-title') }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        <div v-for="member in team" :key="member.email" class="card flex !p-0 z-1 max-w-[550px]">
          <img
            :src="`/team/${member.image}`"
            :alt="`Image of ${member.name}`"
            class="object-cover max-w-[200px]"
            style="background-color: #f5f5f5"
          />
          <div class="flex-grow p-4 space-y-4 bg-white">
            <div>
              <div class="text-xl font-bold">{{ member.name }}</div>
              <div>{{ member.role }}</div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm">
                <HeartIcon size="1.25x" class="icon" />
                {{ member.likes.join(', ') }}
              </div>
              <a class="flex items-center text-sm" :href="member.github">
                <GithubIcon size="1.25x" class="icon" />
                {{ member.github }}
              </a>
            </div>
            <a class="block text-sm text-ui-primary" :href="`mailto:${member.email}`">
              {{ member.email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TeamMembers from '@/assets/team.json';
import { GithubIcon, HeartIcon } from 'vue-feather-icons';

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

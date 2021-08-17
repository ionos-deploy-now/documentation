<template>
  <Layout>
    <div class="bg-img-dots">
      <div class="container">
        <div class="two-column-layout mt-8 lg:mt-16">
          <div class="space-y-4">
            <div class="text-3xl font-bold">
              Hi, nice to meet you!<br />
              <div class="text-ui-primary">We are Deploy Now.</div>
            </div>
            <div>
              Our company asked us to build a product that we would use by ourselves, so we did. Our mission is to
              connect the
              GitHub community to our performant inhouse engineered hosting platform.
            </div>
          </div>
          <div></div>
        </div>

        <div class="two-column-layout mt-8 lg:mt-16">
          <div class="space-y-4">
            <div class="text-xl font-bold">
              Who is IONOS?
            </div>
            <div>
              Headquartered in Germany, IONOS offers various webhosting, domain and cloud products in Europe and North
              America. IONOS manages more than 8 million customer contracts and hosts over 12 million domains in own
              regional data centers. Customers in all markets canbenefit from a free, personal 24/7 support in their
              language.
            </div>
          </div>
          <div class="space-y-4">
            <div class="text-xl font-bold">
              Feedback appreciated
            </div>
            <div>
              We are not done yet! Do you have ideas for Deploy Now or are you missing a feature? We would love to hear
              your
              feedback. You can use the feedback button in the product or send a mail to our Product Owner Robert.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-2xl font-bold mb-8">
        Meet the team
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
            <a class="block text-sm text-ui-primary" :href="`mailto:${member.email}`">{{ member.email }}</a>
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

<template>
  <div class="card light flex !p-0 max-w-[600px] max-h-[180px]">
    <img
      :src="`/team/${image}`"
      :alt="`Image of ${name || image}`"
      class="object-cover max-w-[150px] lg:max-w-[200px]"
      style="background-color: #f5f5f5"
    />
    <div class="p-4 space-y-4">
      <slot>
        <div>
          <div class="title !pb-0">{{ name }}</div>
          <div>{{ role }}</div>
        </div>
        <div class="space-y-2">
          <div class="flex items-center text-sm">
            <HeartIcon class="icon" decorative />
            {{ likes }}
          </div>
          <a class="flex items-center text-sm" :href="github">
            <GithubIcon class="icon" decorative />
            {{ stripProtocol(github) }}
          </a>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import HeartIcon from 'vue-material-design-icons/HeartOutline';
import GithubIcon from 'vue-material-design-icons/Github';
import { stripProtocol } from '~/libs/util';

export default {
  name: 'TeamMember',
  props: {
    name: String,
    role: String,
    image: String,
    github: String,
    likes: String
  },
  components: {
    GithubIcon,
    HeartIcon,
  },
  methods: {
    stripProtocol,
  },
};
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="content" v-html="page.content" />

    <EditLink v-if="showEditLink" class="mt-10" :path="page.fileInfo.path" />

    <div v-if="showPrevNextLinks" class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
      <NextPrevLinks />
    </div>
  </div>
</template>

<script>
import NextPrevLinks from '~/components/NextPrevLinks.vue';
import EditLink from '~/components/EditLink.vue';

export default {
  name: 'Documentation',
  components: {
    NextPrevLinks,
    EditLink,
  },
  props: {
    page: Object,
  },
  computed: {
    showEditLink() {
      return this.page.editable === true;
    },
    showPrevNextLinks() {
      return this.page.prev || this.page.next;
    },
  }
};
</script>

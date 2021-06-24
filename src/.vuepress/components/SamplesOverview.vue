<template>
  <v-container>
    <v-row dense>
      <v-col v-for="sample in samples" :key="sample.key" flex-wrap-reverse>
        <v-card min-width="30vw" max-width="40vw" outlined tile>
          <v-img
            src="http://via.placeholder.com/480x320"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          />
          <v-card-title>{{ sample.title }}</v-card-title>
          <v-card-subtitle>
            {{ sample.frontmatter.description }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <span class="material-icons">
                {{ show ? "expand_less" : "expand_more" }}
              </span>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum ...
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  computed: {
    samples() {
      return this.$site.pages
        .filter((p) => {
          return p.path.indexOf("/showroom/") >= 0;
        })
        .sort((a, b) => {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        });
    },
  },
};
</script>

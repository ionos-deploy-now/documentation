<template>
  <div>
    <p>
      Customize the below Deploy Button snippets starting with a public Git
      repository URL from GitHub, Gitlab or Bitbucket.
    </p>
    <input
      type="text"
      class="
        block
        w-full
        py-2
        pl-4
        pr-10
        border-2
        rounded-lg
        bg-ui-sidebar
        border-ui-sidebar
        outline-none
        focus:bg-ui-background
        md:min-w-[260px]
        xxl:min-w-[400px]
        z-1
      "
      :class="validation ? '' : 'error'"
      :placeholder="repository"
      @input="onInput"
    />
    <br />
    <div class="flex error" v-if="!validation">
      <AlertCircleOutline />
      <p class="ml-2" v-html="$t('create-a-sample.error')" />
    </div>
    <h3>Snippets</h3>
    <p>
      Use the snippets below in your Git repositories or your dashboards for
      users to deploy.
    </p>
    <div>
      <tabs>
        <tab title="Markdown">
          <div class="relative">
            <input
              :value="markdownLink"
              class="copyToClipboard"
              type="text"
              disabled
            />
            <ContentCopy class="icon-right cursor-pointer" decorative @click="copyToClipboard(markdownLink)" />
          </div>
          <br />
          <p class="text-center">
            {{ $t("create-a-sample.snippets.description", { 0: "Markdown" }) }}
          </p>
        </tab>
        <tab title="HTML">
          <div class="relative">
            <input
              v-model="htmlLink"
              class="copyToClipboard"
              type="text"
              disabled
            />
            <ContentCopy class="icon-right cursor-pointer" decorative @click="copyToClipboard(htmlLink)" />
          </div>
          <br />
          <p class="text-center">
            {{ $t("create-a-sample.snippets.description", { 0: "HTML" }) }}
          </p>
        </tab>
      </tabs>
    </div>
    <br />
  </div>
</template>

<script>
import ContentCopy from "vue-material-design-icons/ContentCopy";
import AlertCircleOutline from "vue-material-design-icons/AlertCircleOutline";
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";

export default {
  components: {
    ContentCopy,
    AlertCircleOutline,
    Tab,
    Tabs,
  },
  data() {
    const repository = this.$t("create-a-sample.default-repository");
    return {
      validation: true,

      repository,
      markdownLink: this.$t("create-a-sample.markdown-link", {
        0: this.repository,
      }),
      htmlLink: this.$t("create-a-sample.html-link", { 0: this.repository }),
    };
  },
  methods: {
    configureUrl(value) {
      this.repository = this.validation ? value : this.$t("create-a-sample.default-repository");
      console.log(this.validation);
      console.log(this.repository);
    },
    async copyToClipboard(value) {
      const url = value;

      // await navigator.clipboard.writeText(url.value);
      alert(url);
    },
    checkValidation(query) {
      if (query == '' || query.startsWith("https://www.github.com")) {
        this.validation = true;
        this.configureUrl(query);
      } else {
        this.validation = false;
      }
    },
    onInput(event) {
      this.checkValidation(event.target.value);
    },
  },
};
</script>
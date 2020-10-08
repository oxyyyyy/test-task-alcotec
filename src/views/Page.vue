<template>
  <div class="page">
    <h1 class="page__title">{{ title }}</h1>
    <div class="page__content" v-html="html" v-if="isSuccessHtml"></div>
    <p v-else>Some error, sorry :(</p>
  </div>
</template>

<script>
import { StaticPageService } from "@/service/api.service";

export default {
  name: "Page",
  data() {
    return {
      html: null,
      title: null,
      isSuccessHtml: true
    };
  },
  created() {
    this.fetchPage(this.$route.params.page_id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchPage(to.params.page_id);
    next();
  },
  methods: {
    fetchPage(pageId) {
      StaticPageService.get(pageId)
        .then(response => {
          if (response.status === 200) {
            if (!response.data.success) {
              this.$router.push("/404");
              return;
            }
            this.html = response.data.content.ru;
            this.title = response.data.name.ru;
          } else {
            this.isSuccessHtml = false;
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }
};
</script>

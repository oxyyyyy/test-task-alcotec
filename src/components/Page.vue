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
  components: {},
  props: {
    pageSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      html: null,
      title: null,
      isSuccessHtml: true
    };
  },
  created() {
    StaticPageService.get(this.pageSlug)
      .then(response => {
        if (response.status === 200) {
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
};
</script>

<template>
  <div id="app">
    <div class="container">
      <Nav />
      <router-view />
    </div>
  </div>
</template>

<script>
import "@/assets/scss/style.scss";

import Nav from "@/components/Nav";

export default {
  name: "App",
  components: { Nav }
};
</script>

<style lang="scss"></style>

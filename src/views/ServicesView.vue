<template>
  <main class="about">
    <h1>{{ pages.title.rendered }}</h1>

    <div class="page-content" v-html="pages.content.rendered"></div>
  </main>
</template>

<script>
import WPService from "../services/WPService.js";
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  name: "ServicesView",

  data() {
    return {
      pages: null,
    };
  },

  created() {
    WPService.getSinglePage(11)
      .then((response) => {
        this.pages = response.data;
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

};
</script>
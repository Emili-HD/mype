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

  async created() {
    try {
      const pageId = 11 // ID de la página de servicios
      const pageResponse = await WPService.getSinglePage(pageId)
      this.pages = pageResponse.data
    } catch (error) {
      console.error(error)
    }
  },

};
</script>

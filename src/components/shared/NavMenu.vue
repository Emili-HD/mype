<template>
  <nav v-if="menu" class="main-navigation md-col-7">
    <RouterLink
      class="md-col-1"
      v-for="item in menu"
      :key="item.id"
      :to="item.url.split('/')[3] ? item.url.split('/')[3] : '/'"
      :class="item.post_type"
    >
      {{ item.title }}
    </RouterLink>
  </nav>
</template>

<script>
// WP connection:
import WPService from '../../services/WPService.js'

export default {
  name: 'Nav',

  data() {
    return {
      menu: null,
    }
  },

  async created() {
    try {
      const menuId = 3; // O la ID que corresponda
      const pageResponse = await WPService.getMenu(menuId);
      this.menu = pageResponse.data;
    } catch (error) {
      console.error(error);
    }
  },

}
</script>

<template>
  <div v-for="sectores in pages.acf" :key="sectores.id">
    <section class="panel" v-for="sector in sectores" :key="sector">
      <div class="panel__wrapper md-col-offset-1">
        <!-- :class="sector.classes" -->
        <div class="panel__wrapper__sector">
          <h3>{{ sector.sector }}</h3>
          <div
            class="panel__wrapper__description"
            v-html="sector.descripcion_sector"
          ></div>
          <div
            class="panel__wrapper__servicio md-col-2"
            v-html="sector.descripcion_servicio"
          ></div>

          <a class="button" :href="sector.moreinfobutton">Más información</a>
        </div>

        <div class="panel__wrapper__image">
          <div class="inline-svg" v-html="sector.svgcode"></div>
          <!-- <img :src="sector.imagen_sector" /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'ServicesSection',
  props: ['pages'],
  components: {
    InlineSvg,
  },
}
</script>

<style></style>

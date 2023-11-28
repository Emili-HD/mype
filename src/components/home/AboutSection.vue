<template>
  <section id="about" class="panel" data-color="#ffffff">
    <!-- <figure class="mask md-col-3 md-col-offset-1">
      <img
        :src="pages.featured_media_src_url"
        alt=""
      />
    </figure> -->
    <h2 class="md-col-1 md-col-offset-5">{{ pages.title.rendered }}</h2>
    <div
      class="page-content md-col-2 md-col-offset-5"
      v-html="pages.content.rendered"
    ></div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: ['pages'],
}
</script>

<style lang="scss" scoped>
  figure {
    position: absolute;
    height: 75vh;
  }

  .mask {
    -webkit-mask-image: url(../../assets/images/tile3.svg), url(../../assets/images/tile2.svg), url(../../assets/images/tile1.svg);
    -webkit-mask-size: calc(100vw / 8), calc(100vw / 8), calc(100vw / 8);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: 0px 25vh, calc(100vw / 8), calc((100vw / 8) * 2 + 0.5px) 0;
    -webkit-mask-composite: xor;
    mask-image: url(../../assets/images/tile3.svg), url(../../assets/images/tile2.svg), url(../../assets/images/tile1.svg);
    mask-size: calc(100vw / 8), calc(100vw / 8), calc(100vw / 8);
    mask-repeat: no-repeat;
    mask-position: 0px 25vh, calc(100vw / 8), calc((100vw / 8) * 2) 0;
    mask-composite: exclude;

    & > img {
      -o-object-fit: cover;
         object-fit: cover;
      height: 100%;
      -webkit-filter: hue-rotate(45deg);
              filter: hue-rotate(45deg);
    }
  }
</style>

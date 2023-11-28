<template>
  <section id="wellcome" class="panel">
    <h2 class="wellcome-title">
      Your technology partner
    </h2>
  </section>
</template>

<script>
import image from '../../assets/images/electronic-1.jpg'
export default {
  name: 'WellcomeSection',
  data() {
    return {
      image,
    }
  },
}
</script>

<style>
/* #wellcome img {
  position: absolute;
  top: 0;
  left: 0;
  filter: opacity(0.4) saturate(0.3);
} */

.sliced {
    position: absolute;
    width: 100%;  /* required */
    height: 100vh; /* required */
    overflow:hidden;
}

.sliced > img{
    /* visibility:hidden; */
    object-fit: cover;
    height: 100vh;
    filter: opacity(0.2) saturate(0);
}

</style>

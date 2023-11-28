<template>
  <main class="site-main" v-if="pages">
    <WellcomeSection />
    <AboutSection :pages="pages" />
    <ServicesSection :pages="pages" />
  </main>
</template>

<script>
// WP connection:
import WPService from '../services/WPService.js'

// Libraries:
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import SplitText from 'gsap/SplitText'
import CSSRule from 'gsap/CSSRulePlugin'

// Components:
import WellcomeSection from '../components/home/WellcomeSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'

export default {
  name: 'HomeView',

  data() {
    return {
      pages: null,
    }
  },

  components: {
    WellcomeSection,
    AboutSection,
    ServicesSection,
  },

  methods: {
    gsapInit() {
      gsap.registerPlugin(SplitText, CSSRule)
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

      // create the smooth scroller FIRST!
      /* let smoother = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      })

      smoother.refresh() */

      ScrollTrigger.defaults({
        toggleActions: 'restart pause resume pause',
        scroller: '#smooth-content',
      })

      // gsap.to('#about h2', {
      //   scrollTrigger: '#about',
      //   duration: 2,
      //   rotation: 360,
      // })

      const sections = gsap.utils.toArray('.panel')
      const container = document.querySelector('body')
      const menu = document.querySelector('header .logo')
      const mype = document.querySelectorAll('#mype, #logo')

      const classes = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          toggleClass: { targets: menu, className: 'in--top' },
          start: '100px',
          end: '600%',
          markers: true,
        },
      })
    },
  },

  async created() {
    try {
      const pageId = 2 // ID de la página de inicio
      const pageResponse = await WPService.getSinglePage(pageId)
      this.pages = pageResponse.data
    } catch (error) {
      console.error(error)
    }
  },


  mounted() {
    this.gsapInit()
  },
}
</script>

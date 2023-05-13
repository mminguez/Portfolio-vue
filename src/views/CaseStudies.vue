<template>
  <IntroOverlay v-if="animationComplete === false" />
  <Banner />
  <div class="page">
    <div class="container">
      <h1>{{ currentCaseStudy.title }}</h1>
      <p>{{ currentCaseStudy.description[0] }}</p>
      <img :src="dynamicImport(currentCaseStudy.img[0])" :alt="currentCaseStudy.title" />
      <p>{{ currentCaseStudy.description[1] }}</p>
      <img :src="dynamicImport(currentCaseStudy.img[1])" :alt="currentCaseStudy.title" v-if="currentCaseStudy.img[1]"/>
      <p>{{ currentCaseStudy.description[2] }}</p>
      <img :src="dynamicImport(currentCaseStudy.img[2])" :alt="currentCaseStudy.title" v-if="currentCaseStudy.img[2]"/>
      <p>{{ currentCaseStudy.description[3] }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { VITE_APP_CONFIG } from '../config';
import IntroOverlay from '../components/IntroOverlay.vue';
import Banner from '../components/Banner.vue';


export default {
  name: 'CaseStudies',
  components: {
    IntroOverlay,
    Banner,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const dynamicImport = (name) => {
      return new URL(`../assets/${name}.jpeg`, import.meta.url).href;
    };
    const caseStudies = VITE_APP_CONFIG.caseStudies;

    const currentCaseStudy = computed(() => {
      return caseStudies.find(caseStudy => caseStudy.id === id);
    });

    return {
      currentCaseStudy,
      dynamicImport,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 2rem 0;
  background-color: #DED0C5;
  color: $black;
  height: auto;
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}

img {
  max-width: 80%;
}
</style>

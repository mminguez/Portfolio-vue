<template>
  <IntroOverlay v-if="animationComplete === false" />
  <Banner />
  <div class="page">
    <div class="container">
      <h1>{{ currentCaseStudy.title }}</h1>
      <p>{{ currentCaseStudy.description }}</p>
      <!-- display other case study data... -->
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

    const caseStudies = VITE_APP_CONFIG.caseStudies;

    const currentCaseStudy = computed(() => {
      return caseStudies.find(caseStudy => caseStudy.id === id);
    });

    return {
      currentCaseStudy,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 2rem 0;
  background-color: #DED0C5;
  color: $black;
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>

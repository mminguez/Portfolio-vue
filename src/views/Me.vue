<template>
  <Banner />
  <div class="page">
    <div class="container">
      <h1>C'est moi!</h1>
      <p>Voici mes compétences et mes expériences et mon parcours</p>
      <!-- display other case study data... -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { VITE_APP_CONFIG } from '../config';
import Banner from '../components/Banner.vue';


export default {
  name: 'CaseStudies',
  components: {
    Banner,
  },
  setup() {
    const route = useRoute();
    return {
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

<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <h3>This is the About page</h3>
        <div class="btn-row">
          <router-link to="/">
            Retour
            <RightArrow />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightArrow from '../assets/arrow-right.svg';

export default {
  name: 'About',
  components: {
    RightArrow
  },
};
</script>

<style>
</style>

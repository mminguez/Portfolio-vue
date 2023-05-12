<template>
  <section class="main" :style="{ 'background-color': backgroundColor }">
    <div class="container">
      <div class="row">
        <h2>
          <div class="line">
            <!-- <span>Creating unique brands is</span> -->
            <span>{{ line1Desc }}</span>
          </div>
          <div class="line">
            <!-- <span>what we do.</span> -->
            <span>{{ line2Desc }}</span>
          </div>
        </h2>
        <div class="btn-row">
          <router-link :to="link">
            {{ textLink }}
            <RightArrow />
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { watch, ref, computed } from 'vue';
import RightArrow from '../assets/arrow-right.svg';
import { useRoute, useRouter } from 'vue-router';
import { VITE_APP_CONFIG } from '../config';

export default {
  name: 'Banner',
  components: {
    RightArrow
  },
  setup() {
    const route = useRoute();
    const transitionName = ref('default');
    const line1Desc = computed(() => VITE_APP_CONFIG.banner[route.name]?.line1Desc || '');
    const line2Desc = computed(() => VITE_APP_CONFIG.banner[route.name]?.line2Desc || '');
    const link = computed(() => VITE_APP_CONFIG.banner[route.name]?.link || '/'); 
    const textLink = computed(() => VITE_APP_CONFIG.banner[route.name]?.textLink || ''); 
    const backgroundColor = computed(() => VITE_APP_CONFIG.banner[route.name]?.color || '#DED0C5'); 


    watch(route, (to, from) => {
      transitionName.value = to.meta.transition || 'default';
    });

    return {
      line1Desc,
      line2Desc,
      transitionName,
      link,
      textLink,
      backgroundColor
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 50vh; //fallback option
  height: calc(var(--vh, 1vh) * 50);

  .row {
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 3rem;
      line-height: 4.2rem;
      font-weight: 700;
      z-index: 10;
      color: $white;
      mix-blend-mode: difference;

      @include media('<=tablet') {
        font-size: 2.4rem;
        line-height: 3rem;
      }

      @include media('<=phone') {
        margin-top: 72px;
        font-size: 1.7rem;
        line-height: 2.2rem;
      }

      .line {
        margin-bottom: 8px;
        height: 56px;
        position: relative;
        overflow: hidden;

        @include media('<=tablet') {
          height: 48px;
        }

        @include media('<=phone') {
          height: 32px;
        }

        span {
          position: absolute;
        }
      }
    }

    .btn-row {
      width: 256px;
      position: relative;
      z-index: 2;
      a {
        font-size: 1.6rem;
        color: $black;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;

        @include media('<=tablet') {
          font-size: 1.3rem;
        }

        @include media('<=phone') {
          font-size: 1.1rem;
        }

        svg {
          margin-left: 16px;
          border: 2px solid $black;
          padding: 12px;
          height: 24px;
          width: 24px;
          border-radius: 100px;
          transition: 0.4s ease-in-out;

          @include media('<=tablet') {
            padding: 6px;
            width: 20px;
            height: 20px;
          }

          @include media('<=phone') {
            padding: 4px;
            width: 16px;
            height: 16px;
          }
        }

        &:hover {
          svg {
            background: $black;
            color: $white;
          }
        }
      }
    }
  }
}


</style>

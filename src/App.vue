<template>
  <transition name="vite-bounce">
    <Header :dimensions="dimensions" v-if="showHeader"/>
  </transition>
  <div class="App">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'default'">
        <div :key="route.fullPath">
          <component :is="Component" :dimensions="dimensions"/>
        </div>
      </transition>
    </router-view>
  </div>
  <Navigation />
</template>
<script>
import { gsap } from 'gsap';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { debounce } from './utils';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import { VITE_APP_CONFIG } from './config';

export default {
  components: {
    Header,
    Navigation,
  },
  setup() {
    document.title = VITE_APP_CONFIG.SiteName;
    const dimensions = reactive({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    const showHeader = ref(true);
    const debouncedHandleResize = debounce(() => {
      dimensions.height = window.innerHeight;
      dimensions.width = window.innerWidth;
    }, 1000);

    const debounceHandleScroll = debounce(() => {
      const heightY = document.documentElement.scrollTop;
      if (heightY < 100) {
        showHeader.value = true;
      } else {
        showHeader.value = false;
      }
    }, 100);
    onMounted(() => {
      window.addEventListener('resize', debouncedHandleResize);
      window.addEventListener('scroll', debounceHandleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('scroll', debounceHandleScroll);
    });

    gsap.to('body', 0, { css: { visibility: 'visible' } });


    return {
      dimensions,
      showHeader,
    };
  },
};
</script>
<style>
.App {
  background-color: black;
}
/* scroll css animation */
.vite-bounce-enter-active {
  animation: vite-bounce-in 0.8s;
}

.vite-bounce-leave-active {
  animation: vite-bounce-in 0.25s reverse;
}
.slide-top-enter-active,
.slide-bottom-enter-active {
  transition: all .3s ease;
}
.slide-top-leave-active,
.slide-bottom-leave-active {
  transition: all .8s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.slide-top-enter,
.slide-bottom-leave-to {
  transform: translateY(-100%);
}
.slide-top-leave-to,
.slide-bottom-enter {
  transform: translateY(-100%);
}

@keyframes vite-bounce-in {
  0% {
    transform: scaleY(0);
  }

  20% {
    transform: scaleY(1.35);
  }

  50% {
    transform: scaleY(1.0);
  }

  100% {
    transform: scaleY(1);
  }
}</style>

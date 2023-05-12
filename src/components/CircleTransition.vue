<template>
  <div class="circle-transition" :class="{ active: isActive }" @transitionend="onTransitionEnd"></div>
</template>

<script>
export default {
  name: 'CircleTransition',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.active;
    }
  },
  methods: {
    onTransitionEnd() {
      if (this.isActive) {
        this.$emit('transition-finished');
      }
    }
  }
};
</script>

<style scoped>
.circle-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  pointer-events: none;
  transform: scale(0);
  transform-origin: center;
  transition: transform 1s, opacity 1s;
  z-index: 1000;
}

.circle-transition.active {
  opacity: 1;
  transform: scale(1);
}
</style>

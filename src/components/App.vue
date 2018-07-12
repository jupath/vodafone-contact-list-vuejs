<template>
  <div id="app" class="container">
    <div class="site">
      <app-header />
      <div class="transition">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from './Header';
import AppFooter from './Footer';

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
.fade-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.fade-leave-active {
  animation: going 1s;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.transition {
  position: relative;
}
</style>

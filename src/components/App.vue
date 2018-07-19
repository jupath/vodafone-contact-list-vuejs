<template>
  <div id="app" class="container">
    <div class="site">
      <app-header />
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
  opacity: 0;
}

.fade-leave-active {
  animation: going 1s;
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
</style>

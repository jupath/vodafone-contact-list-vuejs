import Vue from 'vue'
import App from './components/App.vue'
import router from './router';
import store from './store';
import './styles/styles.scss';

new Vue({
  el: '#app',
  router,
  store,
  created() {
    store.dispatch('setInitialContacts');
  },
  render: h => h(App)
})

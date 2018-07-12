import Vue from 'vue';
import VueRouter from 'vue-router';
import AddContactPage from '../components/pages/AddContactPage.vue';
import DashBoard from '../components/pages/Dashboard.vue';
import EditContactPage from '../components/pages/EditContactPage.vue';
import PageNotFound from '../components/pages/PageNotFound.vue';
import SingleContactPage from '../components/pages/SingleContactPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: DashBoard },
    { path: '/addcontact', component: AddContactPage },
    { path: '/editcontact/:id', component: EditContactPage },
    { path: '/contact/:id', component: SingleContactPage },
    { path: '*', component: PageNotFound }
  ]
});

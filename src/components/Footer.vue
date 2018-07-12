<template>
  <footer class="footer text-center py-5">
    All Rights Reserved VSSB 2018.
    <router-link
      class="btn btn--red btn--rounded btn--addnew"
      to="/addcontact"
      v-if="this.$route.path !== '/addcontact'"
    >
      &#43;
    </router-link>
  </footer>
</template>

<style>
.footer {
  margin-top: auto;
}
</style>
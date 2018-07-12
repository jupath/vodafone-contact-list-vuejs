<template>
  <header class="header py-4">
    <div class="header__logo">
      <router-link to="/">
        <img src="../assets/vodafone_logo.svg">
      </router-link>
    </div>
    <div class="header__search d-none d-sm-block">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search for contact"
          @input="handleSetFilter"
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleSetFilter({ target }) {
      this.$store.dispatch('setFilters', target.value);
    }
  }
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins/breakpoints';

.header {
  display: flex;
  justify-content: space-between;
  min-height: 120px;
}

.header__logo {
  @include media-breakpoint-down(xs) {
    width: 100%;
  }
  img {
    height: auto;
    width: 245px;
    @include media-breakpoint-down(xs) {
      display: block;
      margin: 0 auto;
      width: 85%;
    }
  }
}

.header__search {
  @include media-breakpoint-up(lg) {
    width: 430px;
  }
}
</style>

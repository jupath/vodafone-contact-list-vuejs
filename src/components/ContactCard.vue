<template>
  <div class="contact-card col-sm-6 col-md-4 text-center">
    <router-link :to="`/contact/${contact.id}`" class="contact-card__clickwrapper">
      <header class="contact-card__header py-3">
        {{ contact.lastName }}, {{ contact.firstName }}
      </header>
      <div class="contact-card__content">
        <small class="pt-2">{{ contact.email }}</small>
        <small class="py-2">{{ contact.cell }}</small>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object
  }
}
</script>

<style lang="scss">
@import '../styles/helpers/_variables.scss';

.contact-card {
  margin-bottom: 30px;
}

.contact-card__clickwrapper {
  border: 1px solid $light-gray;
  box-shadow: 0px 10px 15px -2px rgba($light-gray,1);
  display: block;
  transition: all .4s;
  &:hover {
    border: 1px solid $contactcard-header-bg;;
    text-decoration: none;
  }
}

.contact-card__header {
  background-color: $contactcard-header-bg;
  color: white;
}

.contact-card__content {
  color: $contactcard-content-color;
}
</style>

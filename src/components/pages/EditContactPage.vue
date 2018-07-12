<template>
  <div>
    <h1>{{ contact.firstName }} {{ contact.lastName }}&apos;s Profile</h1>
    <div class="edit-contact-page px-lg-7 pb-4">
      <contact-form
        :contactProp="contact"
        page="editContact"
      />
    </div>
  </div>
</template>

<script>
import ContactForm from '../ContactForm';

export default {
  computed: {
    contact() {
      return this.$store.state.contacts.find(contact => contact.id === this.$route.params.id);
    }
  },
  components: {
    ContactForm,
  }
}
</script>

<style lang="scss">
.edit-contact-page {
  .form-group {
    display: flex;
    label {
      width: 40%;
    }
  }
}
</style>

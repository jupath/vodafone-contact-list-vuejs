<template>
  <div>
    <h1>Add New Contact</h1>
    <contact-form
      page="addContact"
    />
  </div>
</template>

<script>
import ContactForm from '../ContactForm';

export default {
  components: {
    ContactForm
  }
}
</script>

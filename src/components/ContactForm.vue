<template>
  <div>
    <form>
      <div class="form-group">
        <label for="firstName">First name</label>
        <input
          type="text"
          class="form-control"
          name="firstName"
          placeholder="Enter First Name"
          v-model="contact.firstName"
        >
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input
          type="text"
          class="form-control"
          name="lastName"
          placeholder="Enter Last Name"
          v-model="contact.lastName"
        >
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Enter Email"
          v-model="contact.email"
        >
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="text"
          class="form-control"
          name="cell"
          placeholder="Enter Phone"
          v-model="contact.cell"
        >
      </div>
      <p class="error" v-if="error">
        {{ error }}
      </p>
      <div class="text-center pt-4">
        <button
          class="btn btn--empty btn--gray-empty"
          v-if="page === 'editContact'"
          @click.prevent="handleEditContact"
        >
          Save Contact
        </button>
        <button
          class="btn btn--empty btn--gray-empty"
          v-else
          @click.prevent="handleAddContact"
        >
          Add Contact
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import shortid from 'shortid';

export default {
  props: {
    contactProp: {
      default: () => ({
        firstName: '',
        lastName: '',
        email: '',
        cell: '',
      }),
      type: Object,
    },
    page: String,
  },
  data() {
    return {
      contact: {
        id: this.contactProp.id,
        firstName: this.contactProp.firstName,
        lastName: this.contactProp.lastName,
        email: this.contactProp.email,
        cell: this.contactProp.cell,
      },
      error: false,
    }
  },
  methods: {
    ...mapActions([
      'addContact',
      'editContact',
    ]),
    validateForm() {
      const {
        firstName,
        lastName,
        email,
        cell,
      } = this.contact;

      const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (firstName.trim().length === 0
        || lastName.trim().length === 0
        || email.trim().length === 0
        || cell.trim().length === 0) {
        this.error = 'Please, fill out every field!';
      } else if (!emailReg.test(email)) {
        this.error = 'Please, enter a valid email address!';
      } else {
        return true;
      }
    },
    handleEditContact() {
      if (this.validateForm()) {
        this.editContact(this.contact);
        this.$router.push('/');
      }
    },
    handleAddContact() {
      const payload = {
        ...this.contact,
        id: shortid.generate(),
      };
      if (this.validateForm()) {
        this.addContact(payload);
        this.$router.replace('/');
      }
    }
  }
}
</script>

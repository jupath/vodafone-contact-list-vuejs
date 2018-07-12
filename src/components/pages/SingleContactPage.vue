<template>
  <div class="single-contact">
    <h1>{{ contact.firstName }} {{ contact.lastName }}&apos;s Profile</h1>
    <div class="single-contact__data px-lg-7 pb-5">
      <p><span class="label-color">Name:</span> {{ contact.firstName }} {{ contact.lastName }}</p>
      <p><span class="label-color">E-mail:</span> <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
      <p><span class="label-color">Phone:</span> {{ contact.cell }}</p>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="btn btn--empty btn--red-empty mr-4"
        @click="toggleModal"
      >
        Delete
      </button>
      <router-link
        class="btn btn--empty btn--gray-empty"
        :to="`/editcontact/${contact.id}`"
      >
        Edit
      </router-link>
      <!-- Modal -->
      <modal v-if="showModal" >
        <h5 slot="header" class="modal-title">
          Delete contact
        </h5>
        <p slot="body">
          Are you sure you want to delete {{ contact.firstName }} {{ contact.lastName }}&apos;s profile?
        </p>
        <div slot="footer">
          <button
            type="button"
            class="btn btn--empty btn--red-empty"
            @click="handleDeleteContact"
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn--empty btn--gray-empty"
            data-dismiss="modal"
            @click="toggleModal"
          >
            Cancel
          </button>
        </div>
      </modal>
      <!-- /Modal -->
    </div>

  </div>
</template>

<script>
import Modal from '../Modal';

export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    handleDeleteContact() {
      this.$store.dispatch('deleteContact', this.contact.id);
      this.$router.replace('/');
    }
  },
  computed: {
    contact() {
      return this.$store.state.contacts.find(contact => contact.id === this.$route.params.id);
    }
  },
  components: {
    Modal
  }
}
</script>

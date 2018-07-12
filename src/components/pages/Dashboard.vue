<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="text-center pt-3">
      <button
        type="button"
        class="text-uppercase btn--filter mx-2"
        v-for="letter in getFirstLettersFromLastNames"
        :class="{ active : (filter === letter) }"
        :key="letter"
        @click="handleSetFilter(letter)"
      >
        {{ letter }}
      </button>
    </div>
    <div
      class="text-center py-3"
      v-if="filter.length > 0"
    >
      <button
        type="button"
        class="btn btn--empty btn--red-empty"
        @click="handleSetFilter('')"
      >
      Clear filter
      </button>
    </div>
    <div class="row mt-5">
      <loading
        v-if="contactsAreLoading"
      />
      <contact-card
        v-else
        v-for="contact in filteredContacts"
        :key="contact.id"
        :contact="contact"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ContactCard from '../ContactCard';
import Loading from '../Loading';

export default {
  data() {
    return {
      title: 'Contacts',
    }
  },
  methods: {
    handleSetFilter(letter) {
      this.$store.dispatch('setFilters', letter);
    }
  },
  computed: {
    ...mapState({
      contacts: state => state.contacts,
      contactsAreLoading: state => state.contactsAreLoading,
      filter: state => state.filter,
    }),
    filteredContacts() {
      return this.contacts.filter((contact) => {
        const regex = new RegExp(`^${this.filter}`, 'i');
        return contact.lastName.match(regex);
      });
    },
    getFirstLettersFromLastNames() {
      const letters = this.contacts
      .map(contact => contact.lastName.charAt(0))
      .sort();
      return [...new Set(letters)];
    },
  },
  components: {
    ContactCard,
    Loading,
  }
}
</script>

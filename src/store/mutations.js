import * as types from './mutation-types';

export const mutations = {
  [types.SET_INITIAL_CONTACTS] (state, payload) {
    state.contacts = payload;
  },

  [types.ADD_CONTACT] (state, payload) {
    state.contacts.unshift(payload);
  },

  [types.DELETE_CONTACT] (state, id) {
    state.contacts = state.contacts.filter(contact => contact.id !== id);
  },

  [types.EDIT_CONTACT] (state, payload) {
    state.contacts = state.contacts.map(contact => {
      if (contact.id === payload.id) {
        return {
          ...contact,
          ...payload,
        }
      }
      return contact;
    });
  },

  [types.IS_LOADING] (state, bool) {
    state.contactsAreLoading = bool;
  },

  [types.SET_FILTER] (state, filter) {
    state.filter = filter;
  }
}


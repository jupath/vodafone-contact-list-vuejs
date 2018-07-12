import * as types from './mutation-types';

export const setInitialContacts = async ({commit}) => {
  commit(types.IS_LOADING, true);

  const url = 'https://randomuser.me/api/?results=9&nat=us';

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = await data.results;

    const payload = results.map(user => ({
      id: user.id.value,
      firstName: capitalize(user.name.first),
      lastName: capitalize(user.name.last),
      email: user.email,
      cell: user.cell,
    }));

    commit(types.IS_LOADING, false);
    commit(types.SET_INITIAL_CONTACTS, payload);
  } catch (e) {
    console.error(e);
  }
}

export const addContact = ({commit}, payload) => {
  commit(types.ADD_CONTACT, payload);
}

export const deleteContact = ({commit}, id) => {
  commit(types.DELETE_CONTACT, id);
}

export const editContact = ({commit}, payload) => {
  commit(types.EDIT_CONTACT, payload);
}

export const setFilters = ({commit}, filter) => {
  commit(types.SET_FILTER, filter);
}

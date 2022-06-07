import { createSelector } from 'reselect';
// Chrome Extension: Reselect DevTools
import { registerSelectors } from 'reselect-tools';
import { hasProperty } from '../services/helper';

const mainState = state => state;
const apiState = state => state.api;

const getIdentityUsers_f = state => {
  if (state && state.user.users) {
    // .filter(user => state.user.userIdentity && state.user.userIdentity.length?user.name.includes(state.user.userIdentity):true)
    return state.user.users;
  } else {
    return undefined;
  }
};

export const getIdentityUsers = createSelector(mainState, getIdentityUsers_f);

export const getApiState = createSelector(mainState, state => state.api);

export const getLoadingByAction = (state, action) =>
  hasProperty(state.api.actions, 'type', action);

// // Chrome Extension: Reselect DevTools
registerSelectors({
  getIdentityUsers,
});

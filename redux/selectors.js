import {
  createSelector
} from 'reselect'
// Chrome Extension: Reselect DevTools
import {
  registerSelectors
} from 'reselect-tools';

const getIdentityUsers_f = (state) => {
  if (state && state.user.users) {
    // .filter(user => state.user.userIdentity && state.user.userIdentity.length?user.name.includes(state.user.userIdentity):true)
    return state.user.users;
  } else {
    return undefined;
  }
}

export const getIdentityUsers = createSelector((state) => state,getIdentityUsers_f);

// // Chrome Extension: Reselect DevTools
registerSelectors({
  getIdentityUsers
});
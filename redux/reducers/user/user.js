// Actions Types
export const GET_USER = 'GET_USER';
export const GET_IDENTITY_USERS = 'GET_IDENTITY_USERS';
export const SET_IDENTITY_USERS = 'SET_IDENTITY_USERS';
export const SET_USER_IDENTITY = 'SET_USER_IDENTITY';
const SET_USER = 'SET_USER';

// getters Actions
export const getUser = () => ({
  type: GET_USER,
});

export const getIdentityUser = () => ({
  type: GET_IDENTITY_USERS,
});

// setters Actions
export const setUser = user => ({
  type: SET_USER,
  user,
});

export const setUserIdentity = userIdentity => ({
  type: SET_USER_IDENTITY,
  userIdentity,
});

export const setIdentityUsers = users => ({
  type: SET_IDENTITY_USERS,
  users,
});

const initialState = {
  user: undefined,
  userIdentity: undefined,
  users: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    case SET_USER_IDENTITY:
      const { userIdentity } = action;
      return { ...state, userIdentity };
    case SET_IDENTITY_USERS:
      const { users } = action;
      return { ...state, users };
    default:
      return state;
  }
};

// Actions Types
export const GET_LOADING_STATUS = 'GET_LOADING_STATUS';
export const ACTION_LOADING_STATUS = 'ACTION_LOADING_STATUS';
export const SET_ACTION = 'SET_API_CALL';
export const SET_SUCCESS_ACTION = 'SET_SUCCESS_ACTION';
export const SET_FAIL_ACTION = 'SET_FAIL_ACTION';

// getters Actions
export const getLoadingStatus = () => ({
  type: GET_LOADING_STATUS,
});

export const getActionLoadingStatus = () => ({
  type: ACTION_LOADING_STATUS,
});

// setters Actions
export const setAction = action => ({
  type: SET_ACTION,
  actions: action,
});

const initialState = {
  loading: 0,
  actions: [],
  successLogs: [],
  failLogs: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTION:
      console.log(action, 'action');
      var count = state.loading;
      count++;
      const actions = state.actions;
      actions.push({ ...action.actions, id: +new Date() });
      return { ...state, loading: count, action: actions };
    case SET_SUCCESS_ACTION:
      var count = state.loading;
      count--;
      const successLogs = state.successLogs;
      successLogs.push({ ...action.actions, idS: +new Date() });
      return { ...state, loading: count, successLogs };
    case SET_FAIL_ACTION:
      var count = state.loading;
      count--;
      const failLogs = state.failLogs;
      failLogs.push({ ...action.actions, idF: +new Date() });
      return { ...state, loading: count, failLogs };
    default:
      return state;
  }
};

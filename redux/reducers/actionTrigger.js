import { getUser, GET_USER } from './user/user';

export const callAction = (dispatch, ACTION, DATA = undefined) => {
  let actionObj = {};
  actionObj.action = ACTION;
  if (DATA != undefined) {
    actionObj = { ...actionObj, DATA };
  }
  console.log('Action', actionObj);
  switch (ACTION) {
    case GET_USER:
      dispatch(getUser());
      break;
    default:
      console.error('No Action found.');
  }
};
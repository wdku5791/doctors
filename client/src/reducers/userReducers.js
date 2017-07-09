import { combineReducers } from 'redux';

const description = (
  state = '',
  action
) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNUP":
    case "LOGOUT":
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return '';
    case "LOGIN_ERROR":
    case "SIGNUP_ERROR":
      return action.description;
    default:
      return state;
  }
};

const username = (
  state = '',
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return action.username;
    case "LOGIN_ERROR":
    case "SIGNUP_ERROR":
      return '';
    default:
      return state;
  }
};

const waiting = (
  state = false,
  action
) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNUP":
    case "LOGOUT":
      return true;
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
    case "LOGOUT_SUCCESS":
    case "LOGIN_ERROR":
    case "SIGNUP_ERROR":
    case "LOGOUT_ERROR":
      return false;
    default:
      return state;
  }
};

const loggedIn = (
  state = false,
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
    case "LOGOUT_ERROR":
      return true;
    case "LOGIN_ERROR":
    case "SIGNUP_ERROR":
    case "LOGOUT_SUCCESS":
      return false;
    default:
      return state;
  }
};

const userReducers = combineReducers({
  description,
  waiting,
  loggedIn,
  username
});

export default userReducers;
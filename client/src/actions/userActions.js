import axios from 'axios';

function beginLogin() {
  return { type: "MANUAL_LOGIN" };
}

function loginSuccess(description, username) {
  return {
    type: "LOGIN_SUCCESS",
    description,
    username
  };
}

function loginError(description) {
  return {
    type: "LOGIN_ERROR",
    description
  };
}

function beginLogout() {
  return { type: "LOGOUT"
  };
}

function logoutSuccess() {
  return { type: "LOGOUT_SUCCESS"
  };
}

function logoutError() {
  return { type: "LOGOUT_ERROR"
  };
}

function beginSignUp() {
  return { type: "SIGNUP"
  };
}

function signUpSuccess(description, username) {
  return {
    type: "SIGNUP_SUCCESS",
    description,
    username
  };
}

function signUpError(description) {
  return {
    type: "SIGNUP_ERROR",
    description
  };
}

export function login(data) {
  return (dispatch) => {
    dispatch(beginLogin());

    return axios.get(data)
      .then((response) => {
          dispatch(loginSuccess('Login Successfull', data.username));
          // dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(loginError('Invalid username or password'));
      });
  };
}

export function signUp(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return axios.post(data)
      .then((response) => {
          dispatch(signUpSuccess('Account registered'));
          // dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(signUpError('Error signing up'));
      });
  };
}

export function logOut() {
  return (dispatch) => {
    dispatch(logoutSuccess());

    // return axios.get()
    //   .then((response) => {
    //       dispatch(logoutSuccess());
    //   })
    //   .catch((err) => {
    //     dispatch(logoutError());
    //   });
  };
}
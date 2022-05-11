import { setUserData } from "../user/action";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailure = (err) => {
  return {
    type: LOGIN_ERROR,
    payload: err,
  };
};

export const userLogin = (userData) => (dispatch) => {
  dispatch(loginLoading());

  fetch("https://mahindrajayavaram.herokuapp.com/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("login response", res);
      res.error
        ? dispatch(loginFailure(res.message))
        : dispatch(loginSuccess(res))
         dispatch(setUserData(res.user))
    })
    .catch((e) => {
      dispatch(loginFailure(e.message));
    });
};
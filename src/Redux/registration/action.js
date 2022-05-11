export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

  
  export const registerLoading = () => {
    return {
      type: REGISTER_LOADING,
    };
  };
  
  export const registerSuccess = () => {
    return {
      type: REGISTER_SUCCESS,
    };
  };
  
  export const registerFailure = (err) => {
    return {
      type: REGISTER_ERROR,
      payload: err,
    };
  };
  
  export const newRegister = (userData) => (dispatch) => {
    dispatch(registerLoading());
  
    fetch("https://mahindrajayavaram.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("registration response", res);
        res.error
          ? dispatch(registerFailure(res.message))
          : dispatch(registerSuccess());
      })
      .catch((e) => {
        dispatch(registerFailure(e.message));
      });
  };
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const patchUserData = (userData) => (dispatch) => {
    console.log("Patch userData", userData)
    fetch(`https://mahindrajayavaram.herokuapp.com/users/${userData.id}`, {
      method: "PATCH",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("login response", res)
        dispatch(setUserData(res))

      })
      .catch((e) => {
          console.log(e)
      });
  };
export const getUserData = () => (dispatch) => {
  
    fetch(`https://mahindrajayavaram.herokuapp.com/users`, {})
      .then((res) => res.json())
      .then((res) => {
        console.log("Get Users:", res);

      })
      .catch((e) => {
          console.log(e)
      });
  };

  export const setUserData = (data)=>{
    return {
        type: SET_USER,
        payload: data,
      };
  }
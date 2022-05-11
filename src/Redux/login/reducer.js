import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const initState = {
  isLoading: false,
  token: "",
  isError: false,
  user : {}
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { isLoading: true, isError: false, token: "",user:{} };
    case LOGIN_SUCCESS:
      return { isLoading: false, isError: false, token: payload.token, user:payload.user };
    case LOGIN_ERROR:
      return { isLoading: false, isError: true, token: "", user:{} };
    default:
      return state;
  }
};
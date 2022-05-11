import { GET_USER } from "./action";
import { SET_USER } from "./action";

const initState = {
  user : {}
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
  
    case GET_USER:
      return { user:payload };

    case SET_USER:
      return {user:payload};

    default:
      return state;
  }
};
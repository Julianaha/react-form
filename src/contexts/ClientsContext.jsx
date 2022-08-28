import { createContext } from "react";

const initialData = [];
export const ClientContext = createContext(initialData);
export const ClientProvider = ClientContext.Provider;

const SET_ADDCLIENT = "SET_ADDCLIENT";
export const ClientActions = {
  setAddClient(user) {
    return {
      type: SET_ADDCLIENT,
      payload: user,
    };
  },
};

export const ClientReducer = (state, action) => {
  switch (action.type) {
    case SET_ADDCLIENT:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

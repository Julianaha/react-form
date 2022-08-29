import { createContext } from "react";

export const initialData = [
  {
    name: "Juliana",
    lastname: "Souza",
    email: "julianaha01@gmail.com",
    phone: "12 992033219",
    cep: "88495-000",
    adress1: "30 de dezembro",
    adress2: "Major Pedro",
    birthdate: "01/08/1994",
    cpf: "466.343.231-34",
    money: "1000",
  },
  {
    name: "Juliana",
    lastname: "Mota",
    email: "julianaha01@gmail.com",
    phone: "12 992033219",
    cep: "88495-000",
    adress1: "30 de dezembro",
    adress2: "Major Pedro",
    birthdate: "01/08/1994",
    cpf: "466.343.231-34",
    money: "1000",
  },
];
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
      return [...state, action.payload];
    default:
      return state;
  }
};

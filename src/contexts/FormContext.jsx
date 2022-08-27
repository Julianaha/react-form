// Context, Reducer, Provider, Hook, useReducer
import { createContext, useContext, useState } from "react";

// Context
const FormContext = createContext(state, dispatch);

const initialData = {
  currentStep: "",
  name: "juliana",
  email: "",
  phone: "",
  cep: "",
  adress1: "",
  adress2: "",
  birthdate: "",
  cpf: "",
  money: "",
};

//Reducer
export const FormActions = {
  setCurrentStep(){},
  setName() {},
  setLastName() {},
  setEmail() {},
  setPhone() {},
  setCep() {},
  setAdress1() {},
  setAdress2() {},
  setBirthDate() {},
  setCpf() {},
  setMoney() {},
};

const formReducer = (state, action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLastName:
      return { ...state, lastname: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setPhone:
      return { ...state, phone: action.payload };
    case FormActions.setCep:
      return { ...state, cep: action.payload };
    case FormActions.setAdress1:
      return { ...state, adress1: action.payload };
    case FormActions.setAdress2:
      return { ...state, adress2: action.payload };
    case FormActions.setBirthDate:
      return { ...state, birthdate: action.payload };
    case FormActions.setCpf:
      return { ...state, cpf: action.payload };
    case FormActions.setMoney:
      return { ...state, money: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};

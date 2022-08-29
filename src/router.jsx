import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  UserProvider,
  UserReducer,
  initialData as userData,
} from "./contexts/FormContext";
import {
  ClientProvider,
  ClientReducer,
  initialData,
} from "./contexts/ClientsContext";
import { useReducer } from "react";
import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import FormStep3 from "./pages/FormStep3";
import Clientes from "./pages/Clientes/Clientes";

export const Router = () => {
  const userDispatch = useReducer(UserReducer, userData);
  const clientDispatch = useReducer(ClientReducer, initialData);

  return (
    <BrowserRouter>
      <UserProvider key="UserProvider" value={userDispatch}>
        <ClientProvider key="ClientProvider" value={clientDispatch}>
          <Routes>
            <Route path="/" expect element={<FormStep1 />} />
            <Route path="/step2" element={<FormStep2 />} />
            <Route path="/step3" element={<FormStep3 />} />
          </Routes>
        </ClientProvider>
      </UserProvider>
      <ClientProvider key="ClientProvider" value={clientDispatch}>
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </ClientProvider>
    </BrowserRouter>
  );
};

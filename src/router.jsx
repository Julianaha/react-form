import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider, UserReducer, initialData } from "./contexts/FormContext";
import { useReducer } from "react";
import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import FormStep3 from "./pages/FormStep3";
import Clientes from "./pages/Clientes/Clientes";

export const Router = () => {
  const dispatch = useReducer(UserReducer, initialData);
  return (
    <BrowserRouter>
      <UserProvider key="UserProvider" value={dispatch}>
        <Routes>
          <Route path="/" expect element={<FormStep1 />} />
          <Route path="/step2" element={<FormStep2 />} />
          <Route path="/step3" element={<FormStep3 />} />
        </Routes>
      </UserProvider>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
};

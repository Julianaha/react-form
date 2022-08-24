import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import FormStep3 from "./pages/FormStep3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<FormStep1 />} />
        <Route path="/FormStep2" element={<FormStep2 />} />
        <Route path="/FormStep3" element={<FormStep3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

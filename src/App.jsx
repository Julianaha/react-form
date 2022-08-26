import { useState } from "react";
import "./style/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Header";
import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <BrowserRouter>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>
        <Navbar show={showNav} />
        <div className="main">
          <Routes>
            <Route path="/" expect element={<FormStep1 />} />
            <Route path="/FormStep2" element={<FormStep2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

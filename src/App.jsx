import { useState } from "react";
import "./style/App.css";
import { Router } from "./router";
import Navbar from "./components/Header";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <Navbar show={showNav} />
      <div className="main">
        <Router />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./style/App.css";
import Navbar from "./components/Header";
import FormStep1 from "./pages/FormStep1";
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
        <FormStep1 />
      </div>
    </>
  );
}

export default App;

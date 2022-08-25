import { useState } from "react";
import Navbar from "./components/Header";
import "./style/App.css";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <Navbar show={showNav} />
    </div>
  );
}

export default App;

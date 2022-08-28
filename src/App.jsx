import { useState } from "react";
import "./style/App.css";
import { Router } from "./router";
import Navbar from "./components/Header";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { UserProvider, UserReducer, initialData } from "./contexts/FormContext";
import { useReducer } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useReducer(UserReducer, initialData)
  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <Navbar show={showNav} />
      <div className="main">
        <UserProvider key="UserProvider" value={dispatch}>
          <Router />
        </UserProvider>
      </div>
    </>
  );
}

export default App;

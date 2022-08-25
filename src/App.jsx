import { useState } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import "./style/App.css";
import Navbar from "./components/Header";
import FormStep1 from "./pages/FormStep1";
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
          {/* <Route path="/FormStep1" exact="true" component={FormStep1} /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

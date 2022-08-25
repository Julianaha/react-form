import Navbar from "./components/Header";
import "./style/App.css";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function App() {
  return (
    <div className="App">
      <header>
        <GiHamburgerMenu />
      </header>
      <Navbar />
    </div>
  );
}

export default App;

import Navbar from "../Navbar";
import "./Header.css"
import { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <Navbar show={showNav} />
    </>
  );
};

export default Header;
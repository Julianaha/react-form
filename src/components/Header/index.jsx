import "./Header.css";
import logo from "../../assets/logo.png";
import { MdPersonAdd, MdGroups } from "react-icons/md";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav && active" : "sidenav"}>
      <img src={logo} width="80px" alt="logo" />
      <ul>
        <li>
          <a href="/Clientes">
            <MdGroups width="80px"/>
            Clientes
          </a>
        </li>
        <li>
          <a href="/cadastro">
            <MdPersonAdd />
            Cadastro
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

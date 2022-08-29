import "./Navbar.css";
import { MdPersonAdd, MdGroups } from "react-icons/md";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav && active" : "sidenav"}>
      <h4 className="menu">Menu</h4>
      <ul>
        <li>
          <a href="/clientes">
            <MdGroups width="80px" />
            Clientes
          </a>
        </li>
        <li>
          <a href="/">
            <MdPersonAdd />
            Cadastro
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

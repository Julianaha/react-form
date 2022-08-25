import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({show}) => {
  return (
    <div className={show ? 'sidenav && active' : 'sidenav'}>
      <img src={logo} width="80px" alt="logo" />
      <ul>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

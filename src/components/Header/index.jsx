import "./Header.css";
import logo from "../../assets/logo.png";

const Navbar = ({show}) => {
  return (
    <div className={show ? 'sidenav && active' : 'sidenav'}>
      <img src={logo} width="80px" alt="logo" />
      <ul>
        <li>
          <a href="/">Clientes</a>
        </li>
        <li>
          <a href="/">Cadastro</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

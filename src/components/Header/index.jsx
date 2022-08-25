import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.sidenav}>
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

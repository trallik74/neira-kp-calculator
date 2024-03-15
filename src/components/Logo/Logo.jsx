import styles from "./Logo.module.css";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <a href="https://neiragroup.com/" target="_blank">
      <img className={styles.logo} src={logo} alt="Лого" />
    </a>
  );
}

export default Logo;

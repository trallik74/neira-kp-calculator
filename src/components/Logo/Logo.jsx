import styles from "./Logo.module.css";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

function Logo() {
  return (
    <a href="#" className={styles.logo}>
      <CalculateOutlinedIcon fontSize="inherit" />
    </a>
  );
}

export default Logo;

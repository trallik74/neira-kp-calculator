import { AppBar, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

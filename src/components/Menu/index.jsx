import { AppBar, Toolbar, MenuItem, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Logo } from "./styles";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const Menu = ({ isValidated, setIsValidated }) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const useStyles = makeStyles((theme) => ({
    bt__Right: {
      marginLeft: "auto",
    },
    toolbar: {
      backgroundColor: "#130707",
      width: "65%",

      boxSizing: "borderbox",
      margin: "0 auto",
    },
    appbar: {
      backgroundColor: "#130707",
      boxSizing: "borderbox",
    },
    bt: {
      color: "#F66A98",
    },
  }));

  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.appbar}
      fontWeight="fontWeightBold"
    >
      <Toolbar className={classes.toolbar}>
        <Logo htmlFor="" onClick={() => sendTo("/")}>
          KenzieShop
        </Logo>
        <MenuItem onClick={() => sendTo("/")} className={classes.bt__Right}>
          Produtos
        </MenuItem>
        <MenuItem onClick={() => sendTo("/cart")}>Carrinho</MenuItem>
        <MenuItem onClick={() => sendTo("/")}>Minha Conta</MenuItem>
        <MenuItem onClick={() => sendTo("/")}>Entrar</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

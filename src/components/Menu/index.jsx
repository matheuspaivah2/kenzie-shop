import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Menu = ({ isValidated, setIsValidated }) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const useStyles = makeStyles((theme) => ({
    bt__Right: {
      marginLeft: "auto",
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/home")}>KenzieShop</MenuItem>
        <MenuItem onClick={() => sendTo("/home")} className={classes.bt__Right}>
          Carrinho
        </MenuItem>
        <MenuItem onClick={() => sendTo("/home")}>Entrar</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

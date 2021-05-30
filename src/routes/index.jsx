import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;

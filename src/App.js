import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getAllCategory, getInitialData, isUserLoggedIn } from "./actions";
import "./App.css";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Category from "./containers/Category/Category";
import Home from "./containers/Home/Home";
import NewPage from "./containers/NewPage/NewPage";
import Orders from "./containers/Orders/Orders";
import Products from "./containers/Products/Products";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
    
  }, [auth.authenticate]);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page" exact component={NewPage} />
        <PrivateRoute path="/category" exact component={Category} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Reports from "./pages/Reports";
import PromoCodes from "./pages/PromoCodes";



const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="signup" name="signup" component={Signup}></Route>
      <Route path="login" name="login" component={Login}></Route>
      <Route path="events" name="events" component={Events}></Route>
      <Route path="reports" name="reports" component={Reports}></Route>
      <Route path="promoCodes" name="promoCodes" component={PromoCodes}></Route>
    </Route>
  </Router>,
app);

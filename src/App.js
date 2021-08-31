import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Iphone from "./Components/Iphone/Iphone";


import News from "./Components/AppleNews/News";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap.css";
import "./css/stayle.css";
import Four04 from "./Components/Four04Page/Four04";
import ProductPage from "./Components/product/ProductPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/iphone" exact component={Iphone} />
          {/* <Route path="/News" exact component={News} /> */}
          <Route path="/iphone/:pid" exact component={ProductPage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

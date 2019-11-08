import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import ShopPage from './pages/shop/shop.component ';
import Header from './components/header/header.component';
import SignInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import "./App.css";


function App() {
  return (
    <div>
      {/* This header component is Unique throughout application, that's its placed outside Route */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

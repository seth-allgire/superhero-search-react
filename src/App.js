import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import SearchPage from "./components/SearchPage";
import MyHeroesPage from "./components/MyHeroesPage";
import MyVillainsPage from "./components/MyVillainsPage";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <header className="header">Search for Supers</header>
      <Router>
        <Menu />
        <Switch>
          <Route path="/createAcct">
            <CreateAccountPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/myHeroes">
            <MyHeroesPage />
          </Route>
          <Route path="/myVillains">
            <MyVillainsPage />
          </Route>
          <Route path="*">
            <Redirect to="/launch"></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

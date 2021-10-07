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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <header className="header">Search for Supers</header>
      <Router>
        <Menu />
        <Switch>
          <ProtectedRoute shielded={false} path="/createAcct">
            <CreateAccountPage />
          </ProtectedRoute>
          <ProtectedRoute shielded={false} path="/login">
            <LoginPage />
          </ProtectedRoute>
          <ProtectedRoute shielded={true} path="/search">
            <SearchPage />
          </ProtectedRoute>
          <ProtectedRoute shielded={true} path="/myHeroes">
            <MyHeroesPage />
          </ProtectedRoute>
          <ProtectedRoute shielded={true} path="/myVillains">
            <MyVillainsPage />
          </ProtectedRoute>
          <Route path="*">
            <Redirect to="/createAcct"></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

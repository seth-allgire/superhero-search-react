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
import Menu from "./components/Menu";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <AnimatePresence>
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
              <MyHeroesPage alignment="good" />
            </ProtectedRoute>
            <ProtectedRoute shielded={true} path="/myVillains">
              <MyHeroesPage alignment="bad" />
            </ProtectedRoute>
            <Route path="*">
              <Redirect to="/createAcct"></Redirect>
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;

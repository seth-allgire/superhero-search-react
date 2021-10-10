import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";
import { Button } from "@mui/material";

export default function Menu() {
  const { user, password, account, logoutUser } = useContext(HeroContext);
  return (
    <>
      <div className="relative"></div>
      <nav className="menu">
        {!account && (
          <NavLink to="/createAcct" className="link">
            Let's Get Started
          </NavLink>
        )}
        {account && !user && !password && (
          <NavLink to="/login" className="link" activeClassName="active">
            Login
          </NavLink>
        )}

        {account && user && password && (
          <>
            <NavLink to="/search" className="link" activeClassName="active">
              Search for Supers
            </NavLink>
            <NavLink to="/myHeroes" className="link" activeClassName="active">
              My Heroes
            </NavLink>
            <NavLink to="/myVillains" className="link" activeClassName="active">
              My Villains
            </NavLink>
            <button className="logout" onClick={logoutUser}>
              Logout
            </button>
          </>
        )}
      </nav>
    </>
  );
}

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";

export default function Menu() {
  const { user, account, logoutUser } = useContext(HeroContext);
  return (
    <nav className="menu">
      {/* {!account && !user &&  */}
      <NavLink to="/createAcct" className="link">
        Let's Get Started
      </NavLink>

      {/* {account && !user &&  */}
      <NavLink to="/login" className="link" activeClassName="active">
        Login
      </NavLink>

      {/* {account && user && (
        <> */}
      <NavLink to="/search" className="link" activeClassName="active">
        Search for Supers
      </NavLink>
      <NavLink to="/myHeroes" className="link" activeClassName="active">
        My Heroes
      </NavLink>
      <NavLink to="/myVillains" className="link" activeClassName="active">
        My Villains
      </NavLink>
      <button className="form-button" onClick={logoutUser}>
        Logout
      </button>
    </nav>
  );
}

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";

export default function Menu() {
  const { user, acctUser, logoutUser } = useContext(HeroContext);
  return (
    <nav>
      <>
        {/* {!acctUser && !user &&  */}
        <NavLink to="/createAcct">Let's Get Started</NavLink>

        {/* {acctUser && !user &&  */}
        <NavLink to="/login">Login</NavLink>

        {/* {acctUser && user && (
        <> */}
        <NavLink to="/search">Search for Supers</NavLink>
        <NavLink to="/myHeroes">My Heroes</NavLink>
        <NavLink to="/myVillains">My Villains</NavLink>
        <button onClick={logoutUser}>Logout</button>
      </>
    </nav>
  );
}

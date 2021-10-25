import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";

export default function Menu() {
  const { user, clearState } = useContext(HeroContext);
  return (
    <>
      <div className="menu-container">
        <motion.nav
          className="menu"
          initial="out"
          animate="in"
          exit="out"
          variants={opacityAnmtn}
          transition={transition}
        >
          {!user.username && (
            <>
              <NavLink to="/login" className="link" activeClassName="active">
                Login
              </NavLink>
              <NavLink
                to="/createAcct"
                className="link"
                activeClassName="active"
              >
                Sign Up
              </NavLink>
            </>
          )}

          {user.username && (
            <>
              <NavLink to="/search" className="link" activeClassName="active">
                Search
              </NavLink>
              <NavLink to="/myHeroes" className="link" activeClassName="active">
                My Heroes
              </NavLink>
              <NavLink
                to="/myVillains"
                className="link"
                activeClassName="active"
              >
                My Villains
              </NavLink>
              <button className="logout" onClick={clearState}>
                Logout
              </button>
            </>
          )}
        </motion.nav>
      </div>
    </>
  );
}

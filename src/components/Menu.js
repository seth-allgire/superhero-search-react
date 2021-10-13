import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

export default function Menu() {
  const { user, password, account, logoutUser } = useContext(HeroContext);
  return (
    <>
      <div className="menu-container">
        <motion.nav
          className="menu"
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
          transition={transition}
        >
          {!account && (
            <NavLink to="/createAcct" className="link">
              Get Started
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
              <button className="logout" onClick={logoutUser}>
                Logout
              </button>
            </>
          )}
        </motion.nav>
      </div>
    </>
  );
}

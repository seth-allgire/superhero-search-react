import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HeroContext } from "../shared/HeroContext";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";

export default function Menu() {
  const { user, clearState } = useContext(HeroContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
      {showButton && (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={opacityAnmtn}
          transition={transition}
        >
          <Button
            onClick={scrollToTop}
            sx={{ position: "fixed", bottom: "20px", right: "20px" }}
            variant="contained"
            color="primary"
            endIcon={<ArrowUpwardIcon />}
          >
            Top
          </Button>
        </motion.div>
      )}
    </>
  );
}

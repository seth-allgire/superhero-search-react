import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import useToggleVisibility from "../hooks/useToggleVisibility";
import AccountForm from "./AccountForm";

export default function CreateAccountPage() {
  const { account, accountPswd } = useContext(HeroContext);

  const [AccountFormComponent, toggleFormVisiblity] = useToggleVisibility(
    <AccountForm />,
    false
  );

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
      >
        <h3 className="section-head">
          Create an account to Search for Supers!
        </h3>
        <div className="form-container">
          <Button variant="contained" onClick={toggleFormVisiblity}>
            New Account
          </Button>
        </div>
        <div>{AccountFormComponent}</div>

        {account && accountPswd && (
          <motion.div
            className="success"
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
          >
            Success! You're ready to Login!
          </motion.div>
        )}

        <div>
          <h3 className="section-head">Already have an account?</h3>
          <div className="form-container">
            {/* <div className="link int-link"> */}
            <NavLink to="/login" className="link">
              Login
            </NavLink>
            {/* </div> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}

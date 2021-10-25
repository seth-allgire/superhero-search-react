import React, { useContext, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import useAxios from "../hooks/useAxios";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";

export default function CreateAccountPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const { showDiv, clickToShow } = useContext(HeroContext);
  const { json } = useAxios("/api/users/createAcct", "post", userObj);

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={opacityAnmtn}
        transition={transition}
      >
        <h1 className="section-head page-title">Create an Account</h1>
        <div className="form-container">
          <Button variant="contained" onClick={clickToShow}>
            New Account
          </Button>
        </div>
        {showDiv === true && (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={opacityAnmtn}
            transition={transition}
          >
            <div className="form-container">
              <label className="form-label" htmlFor="firstName">
                First name:
              </label>
              <input
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                placeholder="first"
              ></input>
              <div className="form-error">
                {error &&
                  firstName.length < 2 &&
                  "First name must contain at least 2 characters"}
              </div>
              <label className="form-label" htmlFor="lastName">
                Last name:
              </label>
              <input
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                placeholder="last"
              ></input>
              <div className="form-error">
                {error &&
                  lastName.length < 2 &&
                  "Last name must contain at least 2 characters"}
              </div>
              <label className="form-label" htmlFor="username">
                Create Username:
              </label>
              <input
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                placeholder="Username"
              ></input>
              <motion.div
                className="form-error"
                initial="out"
                animate="in"
                exit="out"
                variants={opacityAnmtn}
                transition={transition}
              >
                {error &&
                  username.length < 4 &&
                  "Username must contain at least 4 characters"}
              </motion.div>
              <label className="form-label" htmlFor="password">
                Create Password:
              </label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
              ></input>
              <motion.div
                className="form-error"
                initial="out"
                animate="in"
                exit="out"
                variants={opacityAnmtn}
                transition={transition}
              >
                {error &&
                  password.length < 8 &&
                  "Password must contain at least 8 characters"}
              </motion.div>

              <Button
                variant="contained"
                onClick={() => {
                  if (
                    firstName.length < 2 ||
                    lastName < 2 ||
                    username.length < 4 ||
                    password.length < 8
                  ) {
                    setError(true);
                    return;
                  }
                  setUserObj({ username, password });
                }}
              >
                Submit
              </Button>
              <div>{json && json.error}</div>
              <div>{json && json.data}</div>
            </div>
          </motion.div>
        )}

        <div>
          <h3 className="section-head">Already have an account?</h3>
          <div className="form-container">
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  );
}

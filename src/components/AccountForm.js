import React from "react";
import { useState, useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

export default function AccountForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acctUser, setAcctUser] = useState("");
  const [acctPassword, setAcctPassword] = useState("");
  const [error, setError] = useState(false);

  const { setAccount, setAccountPswd } = useContext(HeroContext);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
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
        <label className="form-label" htmlFor="acctUser">
          Create Username:
        </label>
        <input
          className="form-input"
          value={acctUser}
          onChange={(e) => setAcctUser(e.target.value)}
          id="acctUser"
          placeholder="your alter ego"
        ></input>
        <motion.div
          className="form-error"
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
          transition={transition}
        >
          {error &&
            acctUser.length < 4 &&
            "Username must contain at least 4 characters"}
        </motion.div>
        <label className="form-label" htmlFor="acctPassword">
          Create Password:
        </label>
        <input
          className="form-input"
          type="password"
          value={acctPassword}
          onChange={(e) => setAcctPassword(e.target.value)}
          id="acctPassword"
          placeholder="your password"
        ></input>
        <motion.div
          className="form-error"
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
          transition={transition}
        >
          {error &&
            acctPassword.length < 4 &&
            "Password must contain at least 4 characters"}
        </motion.div>

        <Button
          variant="contained"
          onClick={() => {
            if (
              firstName.length < 2 ||
              lastName < 2 ||
              acctUser.length < 4 ||
              acctPassword.length < 4
            ) {
              setError(true);
              return;
            }
            setAccount(acctUser);
            setAccountPswd(acctPassword);
          }}
        >
          Submit
        </Button>
      </div>
    </motion.div>
  );
}

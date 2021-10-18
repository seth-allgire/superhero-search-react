import React, { useContext, useEffect, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import useAxios from "../hooks/useAxios";

export default function LoginPage() {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(HeroContext);
  const [userObj, setUserOjb] = useState(null);
  const { json } = useAxios("/api/users/login", "post", userObj);

  useEffect(() => {
    if (json && json.success) {
      setUser(json.data);
    }
  }, [setUser, json]);
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h2 className="section-head page-title">
        Please enter your username and password
      </h2>
      <div className="form-container">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          placeholder="Username"
        ></input>
        <div className="form-error">
          {error &&
            username.length < 4 &&
            "Username must contain at least 4 characters"}
        </div>
        <label className="form-label" htmlFor="password">
          Password:
        </label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
        ></input>
        <div className="form-error">
          {error &&
            password.length < 8 &&
            "Password must contain at least 8 characters"}
        </div>
        <Button
          variant="contained"
          onClick={() => {
            if (username.length < 4 || password.length < 8) {
              setError(true);
              return;
            }
            setUserOjb({ username, password });
            setUser(username);
          }}
        >
          Submit
        </Button>
        <div>{json && json.error}</div>
      </div>
    </motion.div>
  );
}

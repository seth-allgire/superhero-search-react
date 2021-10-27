import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";

import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";

export default function CreateAccountPage() {
  const [username, setUsername] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [userObj, setUserObj] = useState(null);
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
        <div className="form-container">
          <div className="form-surround red-border">
            <div className="form-container form-title icon">
              <PersonAddOutlinedIcon sx={{ fontSize: "50px" }} />
            </div>
            <div className="form-container form-title">Sign Up</div>
            <div className="form-container">
              <label className="form-label" htmlFor="username">
                Username:
              </label>
              <input
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                placeholder="Username"
              ></input>
              <div className="form-error">
                {error && username.length < 4 && (
                  <Alert severity="error">
                    Username must be at least 4 characters
                  </Alert>
                )}
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
                {error && password.length < 8 && (
                  <Alert severity="error">
                    Password must be at least 8 characters
                  </Alert>
                )}
              </div>
              <label className="form-label" htmlFor="confPassword">
                Confirm Password:
              </label>
              <input
                className="form-input"
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                id="confPassword"
                placeholder="Password"
              ></input>
              <div className="form-error">
                {error && password !== confPassword && (
                  <Alert severity="error">Passwords do no match</Alert>
                )}
              </div>
              <Button
                variant="containedPrimary"
                onClick={() => {
                  if (username.length < 4 || password.length < 8) {
                    setError(true);
                    return;
                  }
                  if (password !== confPassword) {
                    setError(true);
                    return;
                  }
                  setUserObj({ username, password });
                }}
              >
                Submit
              </Button>
              <div className="form-error">
                {json && json.error && (
                  <Alert severity="error">{json.error}</Alert>
                )}
                {json && json.data && (
                  <>
                    <div className="form-container">
                      <Alert severity="success">{json.data}</Alert>
                    </div>
                    <div className="form-container">
                      <Button
                        href="/login"
                        variant="containedPrimary"
                        sx={{ fontStyle: "normal" }}
                      >
                        Login
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";
import useAxios from "../hooks/useAxios";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function LoginPage() {
  const button1Style = {
    bgcolor: "secondary.main",
    color: "#144e75",
    "&:hover": {
      backgroundColor: "#fff1aa",
    },

    fontWeight: "600",
  };
  const button2Style = {
    color: "#f3ece8",
    padding: "0px",
    lineHeight: "16px",
    ml: "10px",
  };
  const errorStyle = {
    mt: "2px",
    paddingTop: "0px",
    paddingBottom: "0px",
    color: "#d63a1b",
  };
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
      variants={opacityAnmtn}
      transition={transition}
    >
      <div className="form-container">
        <div className="form-surround">
          <div className="form-container form-title icon">
            <PersonOutlineOutlinedIcon sx={{ fontSize: "50px" }} />
          </div>
          <div className="form-container form-title">Login</div>

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
                <Alert
                  severity="error"
                  sx={{
                    ...errorStyle,
                  }}
                >
                  Username must be at least 4 characters!
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
                <Alert
                  severity="error"
                  sx={{
                    ...errorStyle,
                  }}
                >
                  Password must be at least 8 characters!
                </Alert>
              )}
            </div>
            <div className="form-container">
              <Button
                sx={{
                  ...button1Style,
                }}
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
            </div>
            {/* </div> */}
            <div className="form-error">
              {json && (
                <Alert
                  severity="error"
                  sx={{
                    ...errorStyle,
                  }}
                >
                  {json.error}
                </Alert>
              )}
            </div>
            <div className="form-container">
              <div>Don't have an account?</div>
              <Button
                href="/createAcct"
                sx={{
                  ...button2Style,
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React, { useContext, useState } from "react";
import { HeroContext } from "../shared/HeroContext";

export default function LoginPage() {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { account, accountPswd, user, setUser, password, setPassword } =
    useContext(HeroContext);
  return (
    <div>
      <h3 className="section-head">Please enter your username and password</h3>
      <div className="form-section">
        <label className="form-label" htmlFor="user">
          Username
        </label>
        <input
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="user"
          placeholder="Username"
        ></input>
        <div className="form-error">
          {error &&
            username !== account &&
            "No account found. Please try again"}
        </div>
      </div>
      <div className="form-section">
        <label className="form-label" htmlFor="password">
          Password:
        </label>
        <input
          className="form-input"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          id="password"
          placeholder="Password"
        ></input>
        <div className="form-error">
          {error &&
            userPassword !== accountPswd &&
            "No account found. Please try again"}
        </div>
      </div>
      <button
        className="form-button"
        onClick={() => {
          if (username !== account || userPassword !== accountPswd) {
            setError(true);
            return;
          }
          setPassword(userPassword);
          setUser(username);
        }}
      >
        Submit
      </button>
    </div>
  );
}

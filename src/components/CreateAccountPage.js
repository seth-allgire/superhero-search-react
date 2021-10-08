import React, { useContext, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import { NavLink } from "react-router-dom";

export default function CreateAccountPage() {
  const [showDiv, setShowDiv] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acctUser, setAcctUser] = useState("");
  const [acctPassword, setAcctPassword] = useState("");
  const [error, setError] = useState(false);
  const onClick = () => setShowDiv(true);
  const { account, setAccount, accountPswd, setAccountPswd } =
    useContext(HeroContext);
  return (
    <div>
      <h3 className="section-head">Create an account to Search for Supers!</h3>
      <button className="form-button" onClick={onClick}>
        New Account
      </button>

      {showDiv === true && (
        <div>
          <div className="form-section">
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
          </div>
          <div className="form-section">
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
          </div>
          <div className="form-section">
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
            <div className="form-error">
              {error &&
                acctUser.length < 4 &&
                "Username must contain at least 4 characters"}
            </div>
          </div>
          <div className="form-section">
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
            <div className="form-error">
              {error &&
                acctPassword.length < 4 &&
                "Password must contain at least 4 characters"}
            </div>
          </div>

          <button
            className="form-button"
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
          </button>
          {account && accountPswd && (
            <div className="success">Success! You're ready to Login below!</div>
          )}
        </div>
      )}
      <div className="form-section">
        <div>
          <h3 className="section-head">Already have an account?</h3>
          <div className="link int-link">
            <NavLink to="/login" className="nest-link">
              Go to Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
  const [state, setState] = useState("Sign up");

  return (
    <div className="main">
      <form className="form">
        <h2>{state === "Sign up" ? "Create Account":"Login"}</h2>
        <p>please {state === "Sign up" ? "Create account": "login"} to proceed</p>
        {state === "Sign up" && (
          <div className="detail">
            <p>Name</p>
            <input type="text" placeholder="Enter a name" />
          </div>
        )}
        <div className="detail">
          <p>Email</p>
          <input type="email" placeholder="Enter a email" />
        </div>
        <div className="detail">
          <p>Password</p>
          <input type="password" placeholder="Enter a password" />
        </div>
        <button className="submit-btn">create account</button>
        {
            state === "Sign up" ? (
                <p>
          Already have an account? <span className="span" onClick={() => setState("Sign in")}>Login here...</span>
        </p>
            ) : (
                <p>Create an account? <span className="span" onClick={() => setState("Sign up")}>Click here...</span></p>
            )
        }
      </form>
    </div>
  );
};

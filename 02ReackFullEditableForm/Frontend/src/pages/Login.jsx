import React, { useContext, useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

export const Login = () => {
  const [state, setState] = useState("Sign up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {token, setToken} = useContext(AppContext)

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      if(state === "Sign up"){
          const {data} = await axios.post("http://localhost:5000/api/user/register",{
            name,
            email,
            password
          })

          console.log(data)

          if(data.success){
            localStorage.setItem('token',data.token)
            setToken(data.token)
            toast.success("Account created successfully")
          } else {
            toast.error(data.message)
          }
      } else {
        const {data} = await axios.post("http://localhost:5000/api/user/login",{
          email,
          password
        })
        console.log(data);
        
        if(data.success){
          localStorage.setItem('token',data.token);
          setToken(data.token);
          toast.success("Login Successfully");
        } else{
          console.log(data.message);
          toast.error(data.message)
        }
        

      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(token){
      navigate("/")
    }
  },[token])


  return (
    <div className="main">
      <form className="form" onSubmit={onSubmitHandler}>
        <h2>{state === "Sign up" ? "Create Account" : "Login"}</h2>
        <p>
          please {state === "Sign up" ? "Create account" : "login"} to proceed
        </p>
        {state === "Sign up" && (
          <div className="detail">
            <p>Name</p>
            <input type="text" placeholder="Enter a name" value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
        )}
        <div className="detail">
          <p>Email</p>
          <input type="email" placeholder="Enter a email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="detail">
          <p>Password</p>
          <input type="password" placeholder="Enter a password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="submit-btn">{state === "Sign up"? "Create account": "Login"}</button>
        {state === "Sign up" ? (
          <p>
            Already have an account?{" "}
            <span className="span" onClick={() => setState("Sign in")}>
              Login here...
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span className="span" onClick={() => setState("Sign up")}>
              Click here...
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

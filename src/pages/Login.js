import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";





const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")


      
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Deepak Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="emai" placeholder="email" />
          <input type="password" placeholder="password"  />

          <button>Sign in</button>
          {err && <span>Somthing went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

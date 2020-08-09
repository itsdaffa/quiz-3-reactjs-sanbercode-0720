import React from "react";

const Login = (props) => {
  return (
    <>
      <button style={{ marginTop: "100px" }} onClick={props.handleLogin}>
        Login
      </button>
      <p> You are {props.user ? "" : "not"} logged in </p>
    </>
  );
};

export default Login;

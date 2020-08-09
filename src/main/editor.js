import React from "react";

const Editor = (props) => {
  return (
    <>
      <button style={{ marginTop: "100px" }} onClick={props.handleLogout}>
        Logout
      </button>
      <p> You are {props.user ? "" : "not"} logged in </p>
    </>
  );
};

export default Editor;

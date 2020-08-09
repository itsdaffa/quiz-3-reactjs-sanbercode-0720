import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";

export default function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

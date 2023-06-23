import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import DashBord from "./component/Dashboard/DashBord";

function App() {
  
  return (
    <DashBord />
  );
}

export default App;

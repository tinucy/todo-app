import React from "react";
// import viteLogo from "/vite.svg";
import "./App.scss";
//react-router-dom is a package that allows you to create navigation
//in your app. It's a bit like React Router for
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

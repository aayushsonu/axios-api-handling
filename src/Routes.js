import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Formfiller from "./form";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/post" element={<Formfiller />} />
        <Route path="/update/*" element={<Formfiller reqType="Update" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;

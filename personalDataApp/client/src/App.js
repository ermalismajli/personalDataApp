//import { useQuery, gql } from "@apollo/react-hooks";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Input from "./components/input.js";

import Persons from "./components/persons.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="persons" element={<Persons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
//

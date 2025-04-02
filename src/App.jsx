import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Type from "./pages/pokeType";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/type" element={<Type/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

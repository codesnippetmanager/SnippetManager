import LoginPage from "./LoginPage.jsx";
import React from "react";
import SideBar from "./SideBar.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<LoginPage />}/>
        <Route exact path = "/home" element = {<SideBar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
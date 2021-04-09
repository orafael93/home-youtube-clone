import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
// COMPONENTS
import Header from "./components/Header";
import Home from "./components/Home";
import Trending from "./components/Trending";

// import { GlobalContext } from "./GlobalContext";

function App() {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header setMenuActive={setMenuActive} />
        <Routes>
          <Route end path="/" element={<Home menuActive={menuActive} />} />
          <Route path="feed/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

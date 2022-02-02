import React, { useState, createContext } from "react";
import "./App.css";
import HomeComponent from "./components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/history";
import NoPage from "./components/noPage";
import Layout from "./components/layout";

export const ContextComponent = createContext();

function App() {
  const [history, setHistory] = useState();
  return (
    <BrowserRouter>
      <ContextComponent.Provider
        value={{
          data: history,
          setData: setHistory,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeComponent />} />
            <Route path="/history" element={<History />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ContextComponent.Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

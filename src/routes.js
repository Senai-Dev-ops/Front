import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TablePage from "./pages/TablePage";
import DonutSales from "./pages/DonutSales";
import ChartSucess from "./pages/ChartSucess";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />

        <Route path="/sellers" element={<TablePage />} />
        <Route path="/sellers/*" element={<Navigate to="/sellers" />} />

        <Route path="/sells" element={<DonutSales />} />
        <Route path="/sells/*" element={<Navigate to="/sells" />} />

        <Route path="/success" element={<ChartSucess />} />
        <Route path="/success/*" element={<Navigate to="/success" />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

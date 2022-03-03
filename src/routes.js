import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TablePage from "./pages/TablePage";
import DonutSales from "./pages/DonutSales";
import ChartSucess from "./pages/ChartSucess";

export default function routes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Navigate to="/" />} />

				<Route path="/table" element={<TablePage />} />
				<Route path="/table/*" element={<Navigate to="/table" />} />

				<Route path="/donut" element={<DonutSales />} />
				<Route path="/donut/*" element={<Navigate to="/donut" />} />

				<Route path="/bar-chart" element={<ChartSucess />} />
				<Route path="/bar-chart/*" element={<Navigate to="/bar-chart" />} />
			</Routes>
		</BrowserRouter>
	);
}

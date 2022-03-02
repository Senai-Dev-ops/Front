import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home';
import TablePage from './pages/TablePage';
import DonutSales from './pages/DonutSales'
import ChartSucess from './pages/ChartSucess'

export default function routes() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/table" element={<TablePage />} />
				<Route path="/donut" element={<DonutSales />} />
				<Route path="/bar-chart" element={<ChartSucess />} />
			</Routes>
		</BrowserRouter>
	);
}

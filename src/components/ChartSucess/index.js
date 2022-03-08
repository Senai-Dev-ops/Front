import React from "react";
import ConfigChart from "../../service/Chart";

import { Bar } from "react-chartjs-2";

import "./index.css";
import Legend from "../../components/Legend";

ConfigChart();

const ChartSucessComponent = ({ showLegend }) => {
  const MockData = [
    {
      sellerName: "Logan",
      visited: 1495,
      deals: 684,
    },
    {
      sellerName: "Anakin",
      visited: 2396,
      deals: 1028,
    },
    {
      sellerName: "BarryAllen",
      visited: 3385,
      deals: 2164,
    },
    { sellerName: "Kal-El", visited: 3040, deals: 1958 },
    { sellerName: "Padme", visited: 3426, deals: 2369 },
  ];

  const labels = MockData.map((item) => item.sellerName);
  const dataset = MockData.map((item) => {
    let tax = (item.deals * 100) / item.visited;
    return tax.toFixed(1);
  });

  const legend = MockData.map((item) => {
    let name = item.sellerName;
    let tax = ((item.deals * 100) / item.visited).toFixed(1);

    return {
      name,
      tax,
    };
  });

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sucesso de",
        data: dataset,
        borderColor: "rgba(133, 152, 190, 1)",
        backgroundColor: "rgba(133, 152, 190, 0.5)",
      },
    ],
  };

  return (
    <div className="chartSuccess-container">
      <h1 className="chartSuccess-title">Taxa de Sucesso (em %)</h1>
      <div className="barChart">
        <Bar id="chart" options={options} data={data} />
      </div>
      {showLegend ? (
        <div className="legend">
          {legend.map((item, index) => (
            <Legend key={index} name={item.name} tax={item.tax} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ChartSucessComponent;

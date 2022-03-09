import React from "react";
import ConfigChart from "../../service/Chart";
import { Doughnut } from "react-chartjs-2";
import "./style.css";

ConfigChart();

const DonutSalesComponent = ({ legendPosition, cutout }) => {
  const data = {
    type: "doughnut",
    labels: ["Padme", "Barry Allen", "Anakin", "Logan", "Kal-Ei"],
    datasets: [
      {
        label: "Total de Vendas",
        data: [473088, 499928, 220426, 477138, 444867],
        backgroundColor: [
          "#002466",
          "#2D1E80",
          "#273D81",
          "#5A189A",
          "#4A2BFA",
        ],
        borderColor: ["#002466", "#2D1E80", "#273D81", "#5A189A", "#4A2BFA"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: cutout,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: legendPosition,
      },
    },
  };
  return <Doughnut options={options} data={data} />;
};

export default DonutSalesComponent;

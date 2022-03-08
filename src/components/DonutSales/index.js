import React from "react";
import ConfigChart from "../../service/Chart";
import { Doughnut } from "react-chartjs-2";
import "./style.css";

ConfigChart();

const DonutSalesComponent = () => {
  const data = {
    type: "doughnut",
    labels: ["Padme", "Barry Allen", "Anakin", "Logan", "Kal-Ei"],
    datasets: [
      {
        label: "# of Votes",
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
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };
  return (
    <div className="content-donut">
      <h1 className="title">Todas as Vendas</h1>
      <div className="donutSales">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};

export default DonutSalesComponent;

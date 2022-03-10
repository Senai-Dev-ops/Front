import React, { useEffect, useState } from "react";
import ConfigChart from "../../service/Chart";
import { Doughnut } from "react-chartjs-2";
import "./style.css";

import ConnectionAPI from "../../service/apiService";
import { toast } from "react-toastify";
const API = new ConnectionAPI();

ConfigChart();

const DonutSalesComponent = ({ legendPosition, cutout }) => {
  const [data, setData] = useState({
    labels: ["Carregando..."],
    datasets: [
      {
        label: "Total de Vendas",
        data: [0, 0, 0, 0, 0],
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
  });

  const loadData = async () => {
    try {
      const response = await API.sellsValues();
      setData({
        labels: response.map((item) => item.sellerName),
        datasets: [
          {
            label: "Total de Vendas",
            data: response.map((item) => item.sum),
            backgroundColor: [
              "#002466",
              "#2D1E80",
              "#273D81",
              "#5A189A",
              "#4A2BFA",
            ],
            borderColor: [
              "#002466",
              "#2D1E80",
              "#273D81",
              "#5A189A",
              "#4A2BFA",
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      toast.warn("Não consegui carregar as informações das Vendas...");
    }
  };

  useEffect(() => {
    async function load() {
      await loadData();
    }
    load();
  }, []);

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

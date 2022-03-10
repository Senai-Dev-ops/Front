import React, { useEffect, useState } from "react";
import ConfigChart from "../../service/Chart";

import { Bar } from "react-chartjs-2";

import "./index.css";
import Legend from "../../components/Legend";

import ConnectionAPI from "../../service/apiService";
import { toast } from "react-toastify";
const API = new ConnectionAPI();

ConfigChart();

const ChartSucessComponent = ({ showLegend }) => {
  const [data, setData] = useState([
    {
      sellerName: "Carregando...",
      visited: 0,
      deals: 0,
    },
  ]);

  const loadData = async () => {
    try {
      const response = await API.successTax();
      setData(response);
      return response;
    } catch (error) {
      toast.warn("Não consegui carregar as informações da Taxa de Sucesso...");
    }
  };

  useEffect(() => {
    async function load() {
      await loadData();
    }
    load();
  }, []);

  const [labels, setLabels] = useState([]);
  const [dataset, setDataset] = useState([]);
  const [legend, setLegend] = useState([]);

  useEffect(() => {
    setLabels(data.map((item) => item.sellerName));
    setDataset(
      data.map((item) => {
        let tax = (item.deals * 100) / item.visited;
        return tax.toFixed(1);
      })
    );
    setLegend(
      data.map((item) => {
        let name = item.sellerName;
        let tax = ((item.deals * 100) / item.visited).toFixed(1);
        return {
          name,
          tax: tax === NaN ? (0).toFixed(1) : tax,
        };
      })
    );
  }, [data]);

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

  const chartData = {
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
    <>
      <Bar id="chart" options={options} data={chartData} />
      {showLegend ? (
        <div className="legend">
          {legend.map((item, index) => (
            <Legend key={index} name={item.name} tax={item.tax} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ChartSucessComponent;

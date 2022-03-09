import React from "react";
import ChartSucessComponent from "../../components/ChartSucess";
import Header from "../../components/header";
import Side from "../../components/NavSide";

import "./index.css";

const DonutSales = () => {
  return (
    <article className="container">
      <Side page="success" />
      <div className="content">
        <Header />

        <div className="bar-content">
          <h1 className="bar-title">Taxa de Sucesso (em %)</h1>
          <div className="bar-component">
            <div className="bar-area">
              <ChartSucessComponent showLegend={true} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DonutSales;

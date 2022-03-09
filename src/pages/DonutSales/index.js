import React from "react";
import DonutSalesComponent from "../../components/DonutSales";
import Header from "../../components/header";
import Side from "../../components/NavSide";

import "./style.css";

const DonutSales = () => {
  return (
    <article className="container">
      <Side page="sells" />
      <div className="content">
        <Header />

        <div className="donut-content">
          <h1 className="donut-title">Todas as Vendas</h1>
          <div className="donut-component">
            <div className="donut-area">
              <DonutSalesComponent legendPosition="right" cutout={180} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DonutSales;

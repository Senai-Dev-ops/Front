import React from "react";
import Cards from "../../components/Cards";
import "./style.css";
import Header from "../../components/header";
import Side from "../../components/NavSide";
import ChartSucessComponent from "../../components/ChartSucess";
import DonutSalesComponent from "../../components/DonutSales";
import CustomTable from "../../components/Table";

const Home = () => {
  return (
    <article className="container">
      <Side page="home" />
      <div className="content">
        <Header />
        <div className="row">
          <div className="container-cards">
            <div className="cards-up">
              <Cards typeCard="visits" />
              <Cards typeCard="clients" />
            </div>
            <div className="cards-down">
              <Cards typeCard="values" />
            </div>
          </div>

          <div className="separator" />

          <ChartSucessComponent showLegend={false} />
        </div>

        <div className="row">
          <div className="content-donut">
            <h1 className="title">Todas as Vendas</h1>
            <div className="donutSales">
              <DonutSalesComponent legendPosition="bottom" cutout={80} />
            </div>
          </div>
          <div className="separator" />
          <div className="table-container">
            <div className="table-content">
              <CustomTable rowsNumber={4} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;

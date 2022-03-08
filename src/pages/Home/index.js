import React from "react";
import Cards from "../../components/Cards";
import "./style.css";
import Header from "../../components/header";
import Side from "../../components/NavSide";
import ChartSucessComponent from "../../components/ChartSucess";
import DonutSales from "../DonutSales";
import CustomTable from "../../components/Table";

const Home = () => {
  return (
    <article className="container">
      <div className="navbar">
        <Side />
      </div>
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
          <DonutSales />
          <div className="separator" />
          <CustomTable />
        </div>
      </div>
    </article>
  );
};

export default Home;

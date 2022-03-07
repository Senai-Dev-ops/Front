import React from "react";
import Cards from "../../components/Cards";
import "./style.css";
import Header from "../../components/header";
import Side from "../../components/NavSide";
import ChartSucess from "../ChartSucess";

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
            <div className="two-cards">
              <div className="card">
                <Cards typeCard="visits" />
              </div>

              <div className="card">
                <Cards typeCard="clients" />
              </div>

              <Cards typeCard="values" />
            </div>
          </div>
          <ChartSucess />
        </div>
        <div className="row"></div>
      </div>
    </article>
  );
};

export default Home;

import React from "react";
import Cards from "../../components/Cards";
import "./style.css";
import Header from "../../components/header";
import Side from "../../components/NavSide";

const Home = () => {
  return (
    <article className="container">
      <div className="navbar">
        <Side />
      </div>
      <div className="content">
        <Header />
        <div className="container-cards">
          <Cards typeCard="visits" />

          <Cards typeCard="clients" />

          <Cards typeCard="values" />
        </div>
      </div>
    </article>
  );
};

export default Home;

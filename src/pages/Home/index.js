import React from "react";
import Cards from "../../components/Cards";
import GirlWorkflowImg from "../../assets/img-card1.png";
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
          <Cards
            typeCard="visits"
            color="purple"
            title="vendas"
            textContent="500"
            image={GirlWorkflowImg}
          />

          <Cards
            typeCard="clients"
            color="purple"
            title="vendas"
            textContent="500"
            image={GirlWorkflowImg}
          />
        </div>
      </div>
    </article>
  );
};

export default Home;

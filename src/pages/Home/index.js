import React from "react";
import Cards from "../../components/Cards";
import GirlWorkflow from "../../assets/img-card1.png";
import "./style.css";
import Header from "../../components/header";

const Home = () => {
  return (
    <article className="container">
      <Header />
      <div className="container-cards">
        <Cards
          color="purple"
          title="vendas"
          textContent="500"
          image={GirlWorkflow}
        />
      </div>
    </article>
  );
};

export default Home;

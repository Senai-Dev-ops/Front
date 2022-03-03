import React from "react";
import Cards from "../../components/Cards";
import GirlWorkflow from "../../assets/gum-workflow.png";
import "./style.css";
import Header from "../../components/header";

const Home = () => {
  return (
    <article className="container">
      <Header />
      <div className="container-cards">
        <Cards title="vendas" textContent="500" image={GirlWorkflow} />
      </div>
    </article>
  );
};

export default Home;

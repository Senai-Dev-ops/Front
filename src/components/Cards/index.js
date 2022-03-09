import React from "react";
import GirlWorkflowImg from "../../assets/img1.png";
import GirlClient from "../../assets/img2.png";
import BoyChasingMoney from "../../assets/img3.png";
import "./style.css";

const Cards = ({ typeCard }) => {
  if (typeCard === "visits") {
    return (
      <div className="box-card mini-card visits">
        <h3 className="title">visitas</h3>

        <div className="card-content">
          <p className="card-value">500</p>

          <img className="card-image" src={GirlWorkflowImg} alt="Card Visits" />
        </div>
      </div>
    );
  } else if (typeCard === "clients") {
    return (
      <div className="box-card mini-card clients">
        <h3 className="title">clientes</h3>

        <div className="card-content">
          <img className="card-image" src={GirlClient} alt="Card Clients" />

          <p className="card-value">500</p>
        </div>
      </div>
    );
  } else if (typeCard === "values") {
    return (
      <div className="box-card big-card values">
        <h3 className="title">Valores</h3>

        <div className="card-content">
          <p className="card-value">R$ 246.153,87</p>

          <img className="card-image" src={BoyChasingMoney} alt="Card Values" />
        </div>
      </div>
    );
  }
};

export default Cards;

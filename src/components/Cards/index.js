import React from "react";
import GirlWorkflowImg from "../../assets/img-card1.png";
import GirlClient from "../../assets/img-card2.png";
import BoyChasingMoney from "../../assets/img-card3.png";
import "./style.css";

const Cards = ({ typeCard }) => {
  if (typeCard === "visits") {
    return (
      <div className="box-card visits">
        <div className="container-box-title">
          <h3 className="title">visitas</h3>
        </div>

        <div className="card-content">
          <div className="card-value">
            <p>500</p>
          </div>

          <img className="card-image" src={GirlWorkflowImg} alt="Card image" />
        </div>
      </div>
    );
  } else if (typeCard === "clients") {
    return (
      <div className="box-card clients">
        <div className="container-box-title">
          <h3 className="title">clientes</h3>
        </div>

        <div className="card-content">
          <img className="card-image" src={GirlClient} alt="Card image" />

          <div className="card-value">
            <p>500</p>
          </div>
        </div>
      </div>
    );
  } else if (typeCard === "values") {
    return (
      <div className="box-card values">
        <div className="container-box-title">
          <h3 className="title">Valores</h3>
        </div>

        <div className="card-content">
          <img className="card-image" src={BoyChasingMoney} alt="Card image" />

          <div className="card-value">
            <p>R$ 246.153,87</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;

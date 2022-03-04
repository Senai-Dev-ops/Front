import React from "react";
import "./style.css";

const Cards = ({ typeCard, title, image, textContent, color }) => {
  if (typeCard === "visits") {
    return (
      <div className={`box-card ${color}`}>
        <div className="container-box-title">
          <h3 className="title">{title}</h3>
        </div>

        <div className="card-content">
          <div className="card-value">
            <p>{textContent}</p>
          </div>

          <img className="card-image" src={image} alt={`Card ${title}`} />
        </div>
      </div>
    );
  } else if (typeCard === "clients") {
    return (
      <div className={`box-card ${color}`}>
        <div className="container-box-title">
          <h3 className="title">Visitas</h3>
        </div>

        <div className="card-content">
          <div className="card-value">
            <p>{textContent}</p>
          </div>

          <img className="card-image" src={image} alt={`Card ${title}`} />
        </div>
      </div>
    );
  }
};

export default Cards;

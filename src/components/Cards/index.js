import React from "react";
import "./style.css";

const Cards = ({ title, image, textContent }) => {
	return (
		<div className="box-card">
			<div className="container-box-title">
				<h3 className="title">{title}</h3>
			</div>

			<div className="card-content">
				<div className="card-value">
					<p>{textContent}</p>
				</div>

				<div className="card-image">
					<img src={image} alt={`Card ${title}`} />
				</div>
			</div>
		</div>
	);
};

export default Cards;

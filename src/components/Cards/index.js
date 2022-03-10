import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import GirlWorkflowImg from "../../assets/img1.png";
import GirlClient from "../../assets/img2.png";
import BoyChasingMoney from "../../assets/img3.png";
import ConnectionAPI from "../../service/apiService";
import "./style.css";
const API = new ConnectionAPI();

const Cards = ({ typeCard, css }) => {
	const [sumClients, setSumClients] = useState(0);
	const [sumValues, setSumValues] = useState(0);
	const [sumVisits, setSumVisits] = useState(0);

	const loadData = async () => {
		try {
			const { totalFechados, totalValor, totalVisitado } =
				await API.cardsValues();

			const valueMoney = totalValor.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			});

			setSumClients(totalFechados.toLocaleString("pt-br"));
			setSumValues(valueMoney);
			setSumVisits(totalVisitado.toLocaleString("pt-br"));
		} catch (error) {
			toast.warn(
				"Não consegui carregar as informações da Soma das Visitas, Clientes e Valores..."
			);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	if (typeCard === "visits") {
		return (
			<div
				className={
					css ? "box-card default-mini visits" : "box-card mini-card visits"
				}
			>
				<h3 className="title">visitas</h3>

				<div className="card-content">
					<p className="card-value">{sumVisits}</p>

					<img className="card-image" src={GirlWorkflowImg} alt="Card Visits" />
				</div>
			</div>
		);
	} else if (typeCard === "clients") {
		return (
			<div
				className={
					css ? "box-card default-mini clients" : "box-card mini-card clients"
				}
			>
				<h3 className="title">clientes</h3>

				<div className="card-content">
					<img className="card-image" src={GirlClient} alt="Card Clients" />

					<p className="card-value">{sumClients}</p>
				</div>
			</div>
		);
	} else if (typeCard === "values") {
		return (
			<div
				className={
					css ? "box-card default-big values" : "box-card big-card values"
				}
			>
				<h3 className="title">Valores</h3>

				<div className="card-content">
					<p className="card-value">{sumValues}</p>

					<img className="card-image" src={BoyChasingMoney} alt="Card Values" />
				</div>
			</div>
		);
	}
};

export default Cards;

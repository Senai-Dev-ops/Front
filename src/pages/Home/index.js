import React from "react";
import Cards from "../../components/Cards";
import GirlWorkflow from "../../assets/gum-workflow.png";
import "./style.css";

const Home = () => {
	return (
		<article className="container">
			<div className="container-cards">
				<Cards title="vendas" textContent="500" image={GirlWorkflow} />
			</div>
		</article>
	);
};

export default Home;

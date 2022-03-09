import "./style.css";
import senaisuperior from "../../assets/images/LogoSenai.svg";
import tabela from "../../assets/images/tabela.svg";
import todasvendas from "../../assets/images/tdvendas.svg";
import chart from "../../assets/images/Chart.svg";
import txsucess from "../../assets/images/taxa-de-sucesso2.svg";
import { Link } from "react-router-dom";

const Side = ({ page }) => {
  return (
    <div className="containergeral">
      <div className="logo">
        <img src={senaisuperior} alt="Senai Superior"></img>
      </div>

      <div className="menu">
        <Link to="/" className={page === "home" ? "area active" : "area"}>
          <img src={chart} alt="Dashboard"></img>
          <div className="descript">Dashboard</div>
        </Link>

        <Link to="/sells" className={page === "sells" ? "area active" : "area"}>
          <img src={todasvendas} alt="Vendas"></img>
          <div className="descript">Todas as Vendas</div>
        </Link>

        <Link
          to="/sellers"
          className={page === "sellers" ? "area active" : "area"}
        >
          <img src={tabela} alt="Tabela"></img>
          <div className="descript">Tabela</div>
        </Link>

        <Link
          to="/success"
          className={page === "success" ? "area active" : "area"}
        >
          <img src={txsucess} alt="Sucesso"></img>
          <div className="descript">Taxa de Sucesso</div>
        </Link>
      </div>

      <div className="footer">
        <p className="copi">Senai Suiço Brasileira</p>
        <p className="copi">
          Copyright<sup>&copy;</sup>
        </p>
      </div>
    </div>
  );
};

export default Side;

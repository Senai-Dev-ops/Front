import "./style.css";
import senaisuperior from "../../assets/images/LogoSenai.svg";
import tabela from "../../assets/images/tabela.svg";
import todasvendas from "../../assets/images/tdvendas.svg";
import chart from "../../assets/images/Chart.svg";
import txsucess from "../../assets/images/taxa-de-sucesso2.svg"

const Side = () => {
  return (
    <div className="containergeral">
      
        <div className="logo">
          <img src={senaisuperior} alt=""></img>
        </div>

        
        <div className="menu">
          <div className="area">
            <div className="image">
              <img src={chart} alt=""></img>
            </div>
            <div className="descript">Dashboard</div>
          </div>
          <div className="area">
            <div className="image">
              <img src={todasvendas} alt=""></img>
            </div>
            <div className="descript">Todas as Vendas</div>
          </div>
          <div className="area">
            <div className="image">
              <img src={tabela} alt=""></img>
            </div>
            <div className="descript">Tabela</div>
          </div>
          <div className="area">
            <div className="image">
              <img src={txsucess} alt=""></img>
            </div>
            <div className="descript">Taxa de Sucesso</div>
          </div>
        </div>
      </div>
    
  );
};

export default Side;

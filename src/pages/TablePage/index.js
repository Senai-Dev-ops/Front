import React, { useEffect } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/header";
import Side from "../../components/NavSide";
import CustomTable from "../../components/Table";

import "./style.css";

const TablePage = () => {
  useEffect(() => {
    document.title = "SENAI Superior | Vendedores";
  }, []);

  return (
    <article className="container">
      <Side page="sellers" />
      <div className="content">
        <Header />
        <div className="sellers-content">
          <h1 className="sellers-title">Vendedores</h1>
          <div className="sellers-cards">
            <Cards typeCard="visits" css />
            <Cards typeCard="clients" css />
            <Cards typeCard="values" css />
          </div>
          <div className="sellers-table">
            <CustomTable rowsNumber={7} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TablePage;

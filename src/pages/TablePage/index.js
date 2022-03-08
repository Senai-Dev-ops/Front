import React from "react";
import Cards from '../../components/Cards'
import Header from "../../components/header";
import Side from "../../components/NavSide";
import CustomTable from "../../components/Table";
import './style.css'

const TablePage = () => {
    return (
        <div className="container">
            <div className="navbar">
                <Side />
            </div>
            <div className="content">
                <Header />
                <div className="title-container">
                    <h1 className="title">Tabela</h1>
                </div>
                <div className="cards-container">
                    <Cards typeCard="visits" />
                    <Cards typeCard="clients" />
                    <Cards typeCard="values" />
                </div>
                <div className="table-container">
                    <CustomTable rowsNumber={8} />
                </div>
            </div>
        </div>

    )
}

export default TablePage;
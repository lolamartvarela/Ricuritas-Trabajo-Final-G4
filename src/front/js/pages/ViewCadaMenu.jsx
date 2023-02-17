import React, {useEffect, useContext, useState} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import {CiWheat} from "react-icons/ci";
import {TbPlantOff} from "react-icons/tb";
import {ListGroup} from "react-bootstrap";


export const ViewCadaMenu = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    const agregarcarrito = () => {
        const id = localStorage.getItem('idDinamica');
        console.log('id:', id);
        actions.agregarAlCarrito(id)
        console.log(store.carrito)
        console.log(store.cadaMenu)
    }

    // VISTA CON LA INFO DE CADA MENU CARGADA EN LA BASE DE DATOS
    return (
        <div className="container mt-4 mb-5">
            <div className="jumbotron">
                <div className="d-flex">
                    <img src={

                            store.cadaMenu[localStorage.getItem('idDinamica')] ?. url
                        }
                        style={
                            {
                                width: "400px",
                                height: "300px"
                            }
                        }
                        className="img-fluid rounded-start img-thumbnail"
                        alt="..."/>
                    <div className="card-body">
                        <h1 className="mx-4 mb-3 card-title">
                            {

                            store.cadaMenu[localStorage.getItem('idDinamica')] ?. title
                        } </h1>
                        <p className="mx-4 card-text">
                            {
                            store.cadaMenu[localStorage.getItem('idDinamica')] ?. description
                        } </p>
                        <p className="d-flex justify-content-end mx-5">$ {
                            store.cadaMenu[localStorage.getItem("idDinamica")] ?. price
                        }</p>
                    </div>
                </div>
                <div className="d-flex justify-content-end mx-5">
                    <button className="btn btn-light border border-thumbnail mt-3 mx-1 mb-5"
                        onClick={agregarcarrito}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

// Single.propTypes = {
//     match: PropTypes.object
// };

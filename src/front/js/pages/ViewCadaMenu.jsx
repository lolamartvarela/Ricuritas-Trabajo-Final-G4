import React, {useContext} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";

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

                    {/* FOTO */}
                    <img src={

                            store.cadaMenu[localStorage.getItem('idDinamica')] ?. url
                        }
                        style={
                            {
                                width: "400px",
                                height: "300px"
                            }
                        }
                        className="img-fluid rounded-start"
                        alt="Responsive image"/>

                    <div className="card-body">

                        {/* Titulo */}
                        <h1 className="text-responsive text-lg mx-4 mb-3 card-title">
                            {
                            store.cadaMenu[localStorage.getItem('idDinamica')] ?. title
                        } </h1>

                        {/* Descripcion */}
                        <p className="text-responsive text-lg mx-4 card-text">
                            {
                            store.cadaMenu[localStorage.getItem('idDinamica')] ?. description
                        }</p>

                        {/* Precio */}
                        <p className="text-responsive text-lg d-flex justify-content-end mx-5">$ {
                            store.cadaMenu[localStorage.getItem("idDinamica")] ?. price
                        }</p>
                    </div>
                </div>

                {/* BOTON */}
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

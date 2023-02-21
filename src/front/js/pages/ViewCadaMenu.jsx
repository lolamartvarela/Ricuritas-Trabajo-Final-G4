import React, {useContext} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import {Link, Navigate} from "react-router-dom";

export const ViewCadaMenu = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    const agregarCarrito = async () => {
        const id = localStorage.getItem('idDinamica');
        console.log('id:', id);
        await actions.agregarAlCarrito(id);
        console.log(store.carrito);
        console.log(store.cadaMenu); <Navigate to="/"/>;
    }

    // VISTA CON LA INFO DE CADA MENU CARGADA EN LA BASE DE DATOS
    return (
        <div className="container mt-4 mb-5">
            <div className="jumbotron">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-5 mb-3 mb-md-0">
                        {/* FOTO */}
                        <img src={
                                store.cadaMenu[localStorage.getItem('idDinamica')] ?. url
                            }
                            className="img-fluid rounded-start"
                            alt="Responsive image"/>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <div className="card-body">
                            {/* Titulo */}
                            <h1 className="text-responsive text-lg card-title mb-3">
                                {
                                store.cadaMenu[localStorage.getItem('idDinamica')] ?. title
                            } </h1>

                            {/* Descripcion */}
                            <p className="text-responsive text-lg card-text mb-3">
                                {
                                store.cadaMenu[localStorage.getItem('idDinamica')] ?. description
                            } </p>

                            {/* Precio */}
                            <h4 className="mx-4 text-responsive text-lg d-flex justify-content-end">
                                ${
                                store.cadaMenu[localStorage.getItem('idDinamica')] ?. price
                            } </h4>

                            {/* BOTON */}
                            <div className="d-flex justify-content-end mt-3">
                                {
                                store.auth === true ? (
                                    <button className="btn bgbuttonverde text-white rounded-pill me-1 mx-4 mt-3"
                                        onClick={agregarCarrito}>
                                        <Link to="/carrito"
                                            style={
                                                {
                                                    color: 'inherit',
                                                    textDecoration: 'none'
                                                }
                                        }>
                                            Agregar al carrito
                                        </Link>
                                    </button>
                                ) : (
                                    <h6 className="text-danger mt-2 mb-2">
                                        Si quieres comprar alguno de nuestros menús, debes loguearte o registrarte en caso de que no tengas una cuenta!
                                    </h6>
                                )
                            } </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

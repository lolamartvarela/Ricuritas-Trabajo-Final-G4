import React, {useEffect, useContext, useState} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import {CiWheat} from "react-icons/ci";
import {TbPlantOff} from "react-icons/tb";


export const ViewCadaMenu = (props) => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    // useEffect(() => {
    //     actions.infoCadaMenu();
    // }, [])

    // VISTA DE CADA MENU PARA REPLICAR EN INICIO CON INFO CARGADA EN LA BASE DE DATOS

    return (
        <div className="container mt-4 mb-5">
            <div className="jumbotron">
                <div className="d-flex">
                    <img src={"https://ensaladas.info/wp-content/uploads/2019/06/Pasta-Caprese-con-Pesto.jpg"}
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
                            props ?. nombre
                        }</h1>
                        <p className="mx-4 card-text">
                            {
                            props.description
                        }</p>
                        <div className="mx-5 mt-4 d-flex justify-content-end">
                            <CiWheat style={
                                {
                                    width: "45px",
                                    height: "45px"
                                }
                            }/>
                            <TbPlantOff style={
                                {
                                    width: "40px",
                                    height: "40px"
                                }
                            }/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mx-5">
                    {/* <button className="btn btn-light border border-thumbnail mt-3 mx-1 mb-5"
                        onClick={
                            () => actions.agregarcarrito()
                    }>Agregar al carrito</button> */} </div>
            </div>

            {/* <Link to="/"> */}
            {/* <span className="btn btn-warning border btn-lg" href="#" role="button">Comprar</span> */}
            {/* </Link> */} </div>
    );
};

// Single.propTypes = {
//     match: PropTypes.object
// };

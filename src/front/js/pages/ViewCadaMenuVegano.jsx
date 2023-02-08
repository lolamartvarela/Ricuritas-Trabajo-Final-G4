import React, {useEffect, useContext, useState} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import {RiSeedlingLine} from "react-icons/ri";
import {TbPlant2Off} from "react-icons/tb";


export const ViewCadaMenuVegano = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => { // actions.infoCadaMenuVegano();
    }, [])

    return (
        <div className="container mt-4 mb-5">
            <div className="jumbotron">
                <div className="d-flex">
                    <img src={"https://babycocina.com/wp-content/uploads/2021/07/Ensaladas-veganas.jpg?ezimgfmt=rs:457x304/rscb6/ng:webp/ngcb6"}
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
                            {/* {
                            store.infoCadaMenuVegano
                        } */}
                            Ensalada de quinoa y garbanzos</h1>
                        <p className="mx-4 card-text">Deliciosa ensalada vegana a base de quinoa, acompañada de garbanzos frescos, rucula, lima tahiti, palta local, cherry's y boniatos de nuestra huerta y como toque final, unas semillas de sesamo tostado.<br/>Aliñada con aceite de olida, miel y mostaza, esta ensalada es perfecta para el verano, fresca y nutritiva.<br/>Viene acompañada de un jugo natural de frutos nativos, pan rustico de la casa libre de gluten y un alfajor vegano de mantequilla de!</p>
                        <div className="mx-5 mt-4 d-flex justify-content-end">
                            <TbPlant2Off style={
                                {
                                    width: "40px",
                                    height: "40px"
                                }
                            }/>
                            <RiSeedlingLine style={
                                {
                                    width: "40px",
                                    height: "40px"
                                }
                            }/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mx-5">
                    <button className="btn btn-light border border-thumbnail mt-3 mx-1 mb-5"
                        onClick={
                            () => actions.agregarcarrito()
                    }>Agregar al carrito</button>
                </div>
            </div>

            {/* <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">Comprar</span>
            </Link> */} </div>
    );
};

// Single.propTypes = {
//     match: PropTypes.object
// };

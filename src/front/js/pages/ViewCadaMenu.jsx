import React, {useEffect, useContext, useState} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import {CiWheat} from "react-icons/ci";
import {TbPlantOff} from "react-icons/tb";


export const ViewCadaMenu = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => { // actions.infoCadaMenu();
    }, [])

    return (
        <div className="container mt-4 mb-5">
            <div className="jumbotron">
                <div className="d-flex">
                    <img src={"https://www.vivamisalud.com/wp-content/uploads/2018/07/pasta_caprese_web-1200x720.jpg"}
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
                            store.infoCadaMenu
                        } */}
                            Pasta Caprese</h1>
                        <p className="mx-4 card-text">La pasta caprese es una especialidad de la casa de las mas vendidas.<br/>Preparada a base de pasta semolada, esta ensalada con albahaca, cherry's y ajo se acompaña con un queso de cabra que le da la sutileza perfecta para ser una ensalada rica y completa en boca.<br/>Esta vez la servimos con una limonada de menta y jengibre en su version frozen y un postre sorpresa!</p>
                        <div className="mx-5 mt-4 d-flex justify-content-end">
                            <CiWheat style={
                                {
                                    width: "40px",
                                    height: "40px"
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
                    <button className="btn btn-light border border-thumbnail mt-3 mx-1 mb-5"
                        onClick={
                            () => actions.agregarcarrito()
                    }>Agregar al carrito</button>
                </div>
            </div>

            {/* <Link to="/"> */}
            {/* <span className="btn btn-warning border btn-lg" href="#" role="button">Comprar</span> */}
            {/* </Link> */} </div>
    );
};

// Single.propTypes = {
//     match: PropTypes.object
// };

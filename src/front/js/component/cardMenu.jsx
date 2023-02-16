import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";


export const Menu = (props) => {
    const {actions, store} = useContext(Context)

    // CARD DE UN MENU PARA REPLICAR EN INICIO CON INFO CARGADA EN LA BASE DE DATOS
    const changeId = () => {
        localStorage.setItem("idDinamica", JSON.stringify(props.id));
    }

    return (
        <div className="col-lg-4 col-md-6 mb-3">

            {/* CARD */}
            <div className="card mx-2"
                style={
                    {width: "18rem"}
            }>

                {/* Titulo */}
                <h5 className="card-title mt-1 mx-4 text-responsive text-lg">
                    {
                    props ?. nombre
                }</h5>

                {/* Imagen */}
                <img src={
                        props.imagen
                    }
                    className="card-img-top container mt-1 img-fluid"
                    alt="Responsive image"
                    style={
                        {
                            width: "280px",
                            height: "200px"
                        }
                    }/> {/* Precio */}
                <h5 className="text-responsive text-lg d-flex justify-content-end mx-4 mt-3 mb-1 fst-italic">$ {
                    props.precio
                }</h5>

                {/* BOTON */}
                <div className="align-self-center">
                    <Link to={"/ViewCadaMenu/"}

                        onClick={changeId}

                        className="btn btn-light border mt-2 mx-1 mb-2">Ver Más!</Link>
                    <div/>

                </div>
            </div>
        </div>
    );
}

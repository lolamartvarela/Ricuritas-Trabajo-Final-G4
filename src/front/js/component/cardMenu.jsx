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
        <div className="col-lg-3 col-md-6 mb-3 d-flex justify-content-center">

            {/* CARD */}
            <div className="card mx-auto my-3"
                style={
                    {maxWidth: "20rem"}
            }>

                {/* Titulo */}
                <h4 className="mt-3 mb-4 mx-3 text-center text-lg">
                    {
                    props ?. nombre
                } </h4>

                {/* Imagen */}
                <img src={
                        props.imagen
                    }
                    className="card-img-top img-fluid h-100"
                    alt="Responsive image"/> {/* Precio */}
                <h5 className="text-lg d-flex justify-content-end mx-4 mt-3 mb-1 fst-italic">
                    ${
                    props.precio
                } </h5>

                {/* BOTON */}
                <div className="card-body d-flex justify-content-center">
                    <Link to={"/ViewCadaMenu/"}
                        onClick={changeId}
                        className="btn bgbuttonverde text-white rounded-pill mt-1 mx-1 mb-2">
                        Ver Más!
                    </Link>
                </div>
            </div>
        </div>
    );
}

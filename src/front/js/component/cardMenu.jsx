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
        <div>
            <div className="card"
                style={
                    {width: "18rem"}
            }>
                <h5 className="card-title mt-1 mx-2">
                    {
                    props ?. nombre
                }</h5>
                <img src={
                        props.imagen
                    }
                    className="card-img-top container mt-1"
                    alt="..."
                    style={
                        {
                            width: "280px",
                            height: "200px"
                        }
                    }/>

                <div className="align-self-center">
                    <Link to={"/ViewCadaMenu/"}
                        onClick={changeId}
                        className="btn btn-light border mt-2 mx-1 mb-2">Preparacion</Link>
                    <Link to={"/Carrito/"}
                        className="btn btn-light border mt-2 mx-1 mb-2">Comprar</Link>

                    <div/>
                </div>
            </div>

        </div>
    );
}

{ /* <button className="btn btn-light border mt-2 mx-1 mb-2"
                    onClick={
                        () => actions.viewCadaMenu()
                }>Preparacion</button> */
} { /* <button className="btn btn-warning mt-2 mx-1 mb-2"
                        onClick={
                            () => actions.agregarcarrito()
                    }>Comprar</button> */
}

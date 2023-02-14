import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";


export const Menu = (props) => {
    const {actions, store} = useContext(Context)

    // CARD DE UN MENU PARA REPLICAR EN INICIO CON INFO CARGADA EN LA BASE DE DATOS
    console.log(store.cadaMenu);

    const idDinamica = () => {

        localStorage.setItem("idDinamica", JSON.stringify(props.id))

        // actions.setStoreId(props.id)
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
                <h5 className="d-flex justify-content-end mx-4 mt-2">$ {
                    props.price
                }</h5>

                <div className="align-self-center">
                    <Link to={"/ViewCadaMenu/"}
                        onClick={idDinamica}
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

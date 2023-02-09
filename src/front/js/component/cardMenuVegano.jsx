import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";


export const MenuVegano = ({}) => {
    const {actions} = useContext(Context)

    // CARD DE UN MENU PARA REPLICAR EN INICIO CON INFO CARGADA EN LA BASE DE DATOS

    return (
        <div>
            <div className="card"
                style={
                    {width: "18rem"}
            }>
                <h5 className="card-title mt-1 mx-2">Ensalada de quinoa y garbanzos</h5>
                <img src="https://babycocina.com/wp-content/uploads/2021/07/Ensaladas-veganas.jpg?ezimgfmt=rs:457x304/rscb6/ng:webp/ngcb6" className="card-img-top mt-1" alt="..."/>


                <div className="align-self-center">
                    {/* <button className="btn btn-light border  mt-2 mx-1 mb-2"
                    onClick={
                        () => actions.viewCadaMenuVegano()
                }>Preparacion</button> */}
                    <Link to={"/ViewCadaMenuVegano/"}
                        className="btn btn-light border mt-2 mx-1 mb-2">Preparacion</Link>
                    <button className="btn btn-warning mt-2 mx-1 mb-2"
                        onClick={
                            () => actions.agregarcarrito()
                    }>Comprar</button>
                    <div/>
                </div>
            </div>
        </div>
    );
}

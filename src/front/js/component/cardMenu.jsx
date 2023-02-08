import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";


export const Menu = ({}) => {
    const {actions} = useContext(Context)


    return (
        <div>
            <div className="card"
                style={
                    {width: "18rem"}
            }>
                <h5 className="card-title mt-1 mx-2">Pasta Caprese</h5>
                <img src="https://ensaladas.info/wp-content/uploads/2019/06/Pasta-Caprese-con-Pesto.jpg" className="card-img-top mt-1" alt="..."/>


                <div className="align-self-center">
                    {/* <button className="btn btn-light border mt-2 mx-1 mb-2"
                    onClick={
                        () => actions.viewCadaMenu()
                }>Preparacion</button> */}
                    <Link to={"/ViewCadaMenu/"}
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

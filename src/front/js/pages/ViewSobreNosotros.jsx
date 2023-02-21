import React, {useEffect, useContext, useState} from "react";
// import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";


export const ViewSobreNosotros = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => { // actions.infoCadaMenuVegano();
    }, [])

    return (
        <div className="row flex-column-reverse flex-md-row mt-4 mb-4">
            <div className="col-md-6">
                <img className="img-fluid img-thumbnail"
                    src={"https://negociorentable.online/wp-content/uploads/2019/12/restaurantes-saludables.jpg"}
                    alt="..."/>
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h1 className="mx-4 mb-3 card-title text-responsive text-lg">
                        Sobre nosotros
                    </h1>
                    <p className="mx-4 card-text text-responsive text-lg">
                        • Modernos en el estilo y clásicos en el sabor.
                        <br/>
                        • Un equipo de profesionales que hemos creado la empresa donde nos gustaría comer a diario y en las ocasiones especiales. Con amigos o con clientes, con tiempo para disfrutar o con algo más de prisa porque el trabajo lo requiere.
                        <br/>
                        • Firmes defensores de que calidad no está en el precio, sino en el producto.
                        <br/>
                        • Exigentes porque también somos consumidores y estamos convencidos de que la experiencia debe resultar completa.
                    </p>
                </div>
            </div>
        </div>
    )
}

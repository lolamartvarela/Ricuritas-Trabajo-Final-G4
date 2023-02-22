import React, {useEffect, useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import WhatsappButton from "../component/botonflotante.jsx";


export const ViewComeConsciente = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => { // actions.infoCadaMenuVegano();
    }, [])

    return (
        <div className="container mt-4 mb-5">
            <div className="jumbotron">
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
                <div className="row flex-column flex-md-row mt-4 mb-4">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="mx-4 mb-3 card-title text-responsive text-lg">
                                Alimentacion saludable
                            </h1>
                            <p className="mx-4 card-text text-responsive text-lg">
                                Una alimentación saludable es aquella que provee alimentos en forma variada y equilibrada para brindar al organismo todos los nutrientes y energía necesarios para la vida.
                                <br/>
                                Comer sano depende de una adecuada selección y preparación de los alimentos basada en los hábitos alimentarios, en los conocimientos acerca del valor nutricional de los alimentos, acorde con las diferentes posibilidades económicas y combinando diversos alimentos en forma equilibrada. No hay una dieta única perfecta.
                                <br/>
                                • Los hábitos alimentarios adecuados en la población uruguaya son: el consumo diario de leche y productos lácteos, de alimentos del grupo de las carnes y derivados y de cereales y derivados. Por el contrario resultan aspectos inadecuados el consumo excesivo de calorías, grasas saturadas, sal y azúcar y el bajo o deficiente consumo de frutas y verduras.
                                <br/>
                                • Comer es uno de los placeres de la vida. Afortunadamente disponemos de una gran variedad de alimentos para realizar una alimentación placentera y saludable.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid"
                            src={"https://media.istockphoto.com/id/147032262/es/foto/pir%C3%A1mide-de-comida-con-verdadero-de-la-comida-se-coloca-en-un-c%C3%ADrculo.jpg?s=612x612&w=0&k=20&c=w66FItxrM-zwd7uOAj1eig7xv5CUT7M6XendzavkPbw="}
                            alt="..."/>
                    </div>
                </div>
            </div>
            <WhatsappButton/>
        </div>
    );
};

// Single.propTypes = {
//     match: PropTypes.object
// };

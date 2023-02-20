import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Guiso from "./tipsimg/verduras2.png"
import Hamburgesa from "./tipsimg/hamburgesa.png"
import Verduras from "./tipsimg/verduras.png"

function Carrusel() {
    return (
        <div className="container">
            <Carousel className="mb-5 mt-5">
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100 img-fluid h-50 img-thumbnail"
                        src={Guiso}
                        alt="First slide"/>
                    <Carousel.Caption className="text-shadow">
                        <h3 className="text-center"
                            style={
                                {
                                    fontSize: "2rem",
                                    marginBottom: "1rem"
                                }
                        }>TIP #1</h3>
                        <p className="text-center"
                            style={
                                {fontSize: "1.5rem"}
                        }>
                            Consume frutas y verduras todos los días. Son fuente de micronutrientes y ofrecen saciedad. Lo ideal es mantener el consumo en cinco porciones de frutas y verduras al día.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="d-block w-100 img-fluid h-50 img-thumbnail"
                        src={Hamburgesa}
                        alt="Second slide"/>
                    <Carousel.Caption className="text-shadow">
                        <h3 className="text-center"
                            style={
                                {
                                    fontSize: "2rem",
                                    marginBottom: "1rem"
                                }
                        }>TIP #2</h3>
                        <p className="text-center"
                            style={
                                {fontSize: "1.5rem"}
                        }>
                            El consumo de alimentos procesados y ultraprocesados. Estos alimentos tienen grandes cantidades de sal, aceites, azúcares y conservantes. Si los consumes, te recomendamos hacerlo solo en porciones pequeñas y ocasionalmente.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-fluid h-50 img-thumbnail"
                        src={Verduras}
                        alt="Third slide"/>
                    <Carousel.Caption className="text-shadow">
                        <h3 className="text-center"
                            style={
                                {
                                    fontSize: "2rem",
                                    marginBottom: "1rem"
                                }
                        }>TIP #3</h3>
                        <p className="text-center"
                            style={
                                {fontSize: "1.5rem"}
                        }>
                            Consumiendo productos locales: Prefiere el consumo de productos orgánicos de tu ciudad, de esa manera comerás más sano y tendrás la seguridad de alimentarte con productos frescos.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>


    );
}
export default Carrusel;

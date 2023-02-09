import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <section className='d-flex w-50'/>
                <img className="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/933/196/941/cocina-comida-india-tipica-wallpaper-preview.jpg" alt="First slide"/>
                <Carousel.Caption>

                    <h3>TIP #1</h3>
                    <p>Consume frutas y verduras todos los días. Son fuente de
                                                                                                                                                                                                                micronutrientes y ofrecen saciedad. Lo ideal es mantener el
                                                                                                                                                                                                                consumo en cinco porciones de frutas y verduras al día.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block w-100" src="https://s1.1zoom.me/b4857/620/Fast_food_Hamburger_Vegetables_Fire_Two_520128_1920x1080.jpg" alt="Second slide"/>
                <Carousel.Caption>
                    <h3>TIP #2</h3>
                    <p>
                        El consumo de alimentos procesados y ultraprocesados * Estos
                                                                                                                                                                                                                alimentos tienen grandes cantidades de sal, aceites, azúcares
                                                                                                                                                                                                                y conservantes. Si los consumes, te recomendamos hacerlo solo
                                                                                                                                                                                                                en porciones pequeñas y ocasionalmente.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://s1.1zoom.me/b4850/553/Vegetables_Texture_516103_1920x1080.jpg" alt="Third slide"/>
                <Carousel.Caption>
                    <h3>TIP #3</h3>
                    <p>
                        Consumiendo productos locales: Prefiere el consumo de
                                                                                                                                                                                                                productos orgánicos de tu ciudad, de esa manera comerás más
                                                                                                                                                                                                                sano y tendrás la seguridad de alimentarte con productos
                                                                                                                                                                                                                frescos.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
}
export default Carrusel;

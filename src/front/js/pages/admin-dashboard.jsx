import React from "react";

const admindashboard = () => {
    return (
        <div>
            <h1>ORDENES</h1>
            <section style={
                {
                    display: "flex",
                    justifyContent: "left"
                }
            }>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item"
                        style={
                            {
                                display: "flex",
                                justifyContent: "left"
                            }
                    }>
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                PEDIDOS
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is intended to demonstrate the
                                <code>.accordion-flush</code>
                                class. This is the first item's accordion body.
                            </div>
                        </div>
                        <button type="button" className="btn btn-success">Agregar Vianda</button>
                        <button type="button" className="btn btn-warning">Modificar Vianda</button>
                        <button type="button" className="btn btn-danger">Quitar Vianda</button>
                    </div>
                </div>
            </section>
            <div className="card"
                style={
                    {
                        width: "24rem",
                        display: "flex",
                        justifyContent: "right"
                    }
            }>
                <div className="card-body">
                    <h4 className="card-title">Modal de Referencia</h4>
                    <img src="https://media.alamesacuba.com/media/blog/el-origen-de-la-palabra-vianda_alamesacuba_1.jpg" className="card-img-top" alt="..."/>
                    <h5 className="card-title">Pure de papa</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default admindashboard;

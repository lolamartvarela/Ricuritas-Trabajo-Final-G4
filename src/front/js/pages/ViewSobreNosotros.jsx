import React, {useEffect, useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {Context} from "../store/appContext.js";
import WhatsappButton from "../component/botonflotante.jsx";
import {FaLinkedinIn} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {ImTwitter} from "react-icons/im";
import {GrInstagram} from "react-icons/gr";

export const ViewSobreNosotros = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {}, [])

    return (
        <div className="row flex-column-reverse flex-md-row mt-4 mb-4">
            <div className="col-md-12">
                <div className="card-body">
                    <h1 className="mb-3 card-title text-responsive text-lg">
                        Sobre nosotros
                    </h1>
                    <text className="card-text text-responsive text-lg">
                        Somos un grupo de estudiantes del Bootcamp Full-Stack Software Developer de 4Geeks.
                        <br/>
                        Ubicados en la ciudad de Minas, hemos desarrollado una e-commerce para una empresa gastronómica que ofrece viandas saludables.
                        <br/>
                        Dicho proyecto se llevó a cabo en un período de 4 semanas con la supervisión y el apoyo de nuestros docentes, que nos han guiado para que nuestra Web App tenga las condiciones óptimas para su funcionamiento.
                        <br/>
                        Les compartimos en el siguiente link, la información de cada integrante del equipo para que puedan conocernos y contactarse mediante nuestras redes sociales.
                        <br/>
                        <br/>
                    </text>

                    <text className="text-secondary">
                        Ramiro García:
                        <a className="linkedin" href="https://www.linkedin.com/in/mba-ramiro-garc%C3%ADa-pereira-a9093519/"><FaLinkedinIn className="ms-2"/></a>
                        <a className="text-dark" href="https://github.com/NebyX1"><AiFillGithub className="ms-2"/></a>
                        <br/>
                        Tomás Berni:
                        <a className="linkedin" href="https://www.linkedin.com/in/tomas-berni-766722143/"><FaLinkedinIn className="ms-2"/></a>
                        <a className="text-dark" href="https://github.com/T0MAS2"><AiFillGithub className="ms-2"/></a>
                        <br/>
                        Matías Rodríguez:
                        <a className="linkedin" href="https://www.linkedin.com/in/mat%C3%ADas-rodr%C3%ADguez-lezcano-4639ba1bb/"><FaLinkedinIn className="ms-2"/></a>
                        <a className="text-dark" href="https://github.com/MatiasRodriguez09"><AiFillGithub className="ms-2"/></a>
                        <br/>
                        Lucía Martínez:
                        <a className="linkedin" href="https://www.linkedin.com/in/lucía-martínez-varela"><FaLinkedinIn className="ms-2"/></a>
                        <a className="text-dark" href="https://github.com/lolamartvarela"><AiFillGithub className="ms-2"/></a>
                        <a className="twitter" href="https://twitter.com/lulisabelinos"><ImTwitter className="ms-2"/></a>
                        <a className="instagram" href="https://www.instagram.com/lulimartvarela/"><GrInstagram className="ms-2"/></a>
                        <br/>
                    </text>
                    <br/>
                    <br/>
                    <div className="d-flex justify-content-end">
                        <h6>Muchas gracias al equipo de 4Geeks!</h6>
                    </div>
                    <div className="d-flex justify-content-end">
                        <h6>Lucía, Matías, Ramiro y Tomás.</h6>
                    </div>
                </div>
            </div>
            <WhatsappButton/>
        </div>
    )
}

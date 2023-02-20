import React, {Component, useContext} from "react";
import Logo from "../component/logo/logo.png";
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {Link, Navigate} from "react-router-dom";
import {AiOutlineShop} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import {Context} from "../store/appContext";

export const Footer = () => {
    const {actions, store} = useContext(Context);

    return (
        <footer className="text-center text-lg-start bg-white text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Síguenos en nuestras redes sociales:</span>
                </div>

                <div>
                    <a href="https://wa.me/0059898592440" target="_blank">
                        <i className="me-4 link-secondary"><BsWhatsapp style={
                                {
                                    height: "35px",
                                    width: "35px"
                                }
                            }/></i>
                    </a>
                    <Link to={"/"}
                        className="me-4 link-secondary">
                        <FaFacebookSquare style={
                            {
                                height: "40px",
                                width: "40px"
                            }
                        }/>
                    </Link>
                    <Link to={"/"}
                        className="me-4 link-secondary">
                        <FaTwitterSquare style={
                            {
                                height: "40px",
                                width: "40px"
                            }
                        }/>
                    </Link>
                    <Link to={"/"}
                        className="me-4 link-secondary">
                        <FaInstagramSquare style={
                            {
                                height: "40px",
                                width: "40px"
                            }
                        }/>
                    </Link>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-12 col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <img src={Logo}
                                alt="Logo"
                                className="d-block mx-auto mb-4"
                                style={
                                    {
                                        maxWidth: "70%",
                                        height: "auto"
                                    }
                                }/>
                        </div>

                        <div className="col-6 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <p className="text-grey">
                                <Link to={"/"}
                                    className="nav-link nav-item">
                                    Inicio
                                </Link>
                            </p>
                            <p>
                                <Link to={"/ViewComeConsciente/"}
                                    className="nav-link">
                                    Come consciente
                                </Link>
                            </p>
                            <p>
                                <Link to={"/tips"}
                                    className="nav-link">
                                    Tips
                                </Link>
                            </p>
                            {
                            store.auth === true ? (
                                <p>
                                    <Link to={"/carrito"}
                                        className="nav-link">
                                        <AiOutlineShop style={
                                            {
                                                width: "30px",
                                                height: "30px"
                                            }
                                        }/>
                                    </Link>
                                </p>
                            ) : null
                        } </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Ubicación</h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.81212399986518!2d-55.23454334387574!3d-34.376073268089975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950aba257fb6bc63%3A0xf650e57c6eceadf!2sIntendencia%20Departamental%20de%20Lavalleja!5e0!3m2!1ses!2suy!4v1676058743881!5m2!1ses!2suy" width="100%" height="250"
                                style={
                                    {border: "0"}
                                }
                                allowFullScreen=""
                                loading="lazy"
                                className="h-lg-100 h-md-75"></iframe>
                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Info de Contacto</h6>
                            <p>
                                <i className="fas fa-home me-3 text-secondary"></i>
                                Calle Falsa 123
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                ricuritas.info@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3 text-secondary"></i>
                                0987654321
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <div className="text-center p-4"
                style={
                    {backgroundColor: "rgba(0, 0, 0, 0.025)"}
            }>
                © {
                new Date().getFullYear()
            }
                <span className="ms-2">Ricuritas</span>
            </div>

        </footer>
    );
};

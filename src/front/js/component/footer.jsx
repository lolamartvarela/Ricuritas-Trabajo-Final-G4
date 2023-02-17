import React, {Component, useContext} from "react";
import Logo from "../component/logo/logo.png";
import {BsInstagram} from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {Link, Navigate} from "react-router-dom";
import {AiOutlineShop} from "react-icons/ai";
import {Context} from "../store/appContext";

export const Footer = () => {
    const {actions, store} = useContext(Context);

    return (
        <footer className="bg-white py-3">
            <div className="container d-flex">
                <div className="flex-fill text-center">
                    <img src={Logo}
                        alt="Logo"
                        style={
                            {width: "150px"}
                        }/>
                </div>
                <div className="flex-fill text-start">
                    <Link to={"/"}
                        className="nav-link nav-item text-secondary">
                        Inicio
                    </Link>

                    <Link to={"/ViewComeConsciente/"}
                        className="nav-link text-secondary">
                        Come consciente
                    </Link>

                    <Link to={"/tips"}
                        className="nav-link nav-item text-secondary">
                        Tips
                    </Link>


                    {
                    store.auth === true ? (
                        <Link to={"/carrito"}
                            className="nav-link nav-item text-secondary">
                            <AiOutlineShop/>
                        </Link>
                    ) : null
                } </div>
                <div className="flex-fill text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.81212399986518!2d-55.23454334387574!3d-34.376073268089975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950aba257fb6bc63%3A0xf650e57c6eceadf!2sIntendencia%20Departamental%20de%20Lavalleja!5e0!3m2!1ses!2suy!4v1676058743881!5m2!1ses!2suy" width="600" height="165"
                        style={
                            {border: "0"}
                        }
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex-fill text-sm-start">
                    <div className="mb-5">
                        <BsInstagram/>
                        <span>
                            <strong>Ricuritas_shop</strong>
                        </span>
                    </div>
                    <div className="mb-5">
                        <AiOutlineFacebook/>
                        <span>
                            <strong>Ricuritas Shop</strong>
                        </span>
                    </div>
                    <div>
                        <AiOutlineMail/>
                        <span>
                            <strong>Ricuritas@gmail.com</strong>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

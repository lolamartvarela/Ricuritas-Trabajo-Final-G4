import React, {Component} from "react";
import Logo from "../component/logo/logo.jpg";
import {BsInstagram} from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";

export const Footer = () => (
    <footer className="bg-light py-3">
        <div className="container d-flex">
            <div className="flex-fill text-center">
                <img src={Logo}
                    alt="Logo"
                    style={
                        {width: "150px"}
                    }/>
            </div>
            <div className="flex-fill text-start">
                <a className="nav-link" href="#">
                    Inicio
                </a>
                <a className="nav-link" href="#">
                    Come consciente
                </a>
                <a className="nav-link" href="#">
                    Tips
                </a>
            </div>
            <div className="flex-fill text-center">
                <p>Sección 3</p>
            </div>
            <div className="flex-fill text-sm-start">
                <div className="mb-4">
                    <BsInstagram/>
                    <span>
                        <strong>Ricuritas_shop</strong>
                    </span>
                </div>
                <div className="mb-4">
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

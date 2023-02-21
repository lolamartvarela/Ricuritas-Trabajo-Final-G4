import React, {useContext, useState, useEffect} from "react";
import {Link, Navigate} from "react-router-dom";
import {AiOutlineShop} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import Logo from "../component/logo/logo.png";

import {Context} from "../store/appContext";

export const Navbar = () => {
    const {store, actions} = useContext(Context);
    const [opacity, setOpacity] = useState(1);
    const [carritoCount, setCarritoCount] = useState(store.carrito.length);


    useEffect(() => {
        setCarritoCount(store.carrito.length);
    }, [store.carrito]);


    function handleLogout() {
        actions.clearCart()
        actions.logout(); <Navigate to="/"/>;
    }


    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setOpacity(0.8);
        } else {
            setOpacity(1);
        }
    };


    // ? Este useEffect controla si existe desplazamiento en la página para darle transparencia al navbar
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="col-12 d-flex justify-content-end px-2 px-md-5">
                    {
                    store.auth === false ? (
                        <Link to={"/login"}
                            className="btn bgbuttonverde text-white rounded-pill me-1">Ingresar</Link>
                    ) : null
                }
                    {
                    store.auth === false ? (
                        <Link to={"/register"}
                            className="btn bgbuttonverde text-white rounded-pill me-1">Registrarse</Link>
                    ) : null
                }
                    {
                    store.auth === true ? (
                        <div className="d-flex align-items-center">
                            <h6 className="text-muted me-2">Bienvenide!, {
                                localStorage.getItem("username")
                            }</h6>
                            <Link to={"/dashboard"}
                                className="btn bgbuttonverde text-white rounded-pill me-1">Panel</Link>
                        </div>
                    ) : null
                }
                    {
                    store.auth === true ? (
                        <Link to={"/"}
                            className="btn bgbuttonverde text-white rounded-pill me-1"
                            onClick={handleLogout}>Salir</Link>
                    ) : null
                } </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
                style={
                    {opacity}
            }>
                <div className="container">
                    <Link to={"/"}
                        className="navbar-brand">
                        <img src={Logo}
                            alt="Logo"
                            style={
                                {
                                    width: "120px",
                                    height: "120px"
                                }
                            }/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to={"/"}
                                    className="nav-link">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/ViewComeConsciente/"}
                                    className="nav-link">
                                    Come consciente
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/tips"}
                                    className="nav-link">
                                    Tips
                                </Link>
                            </li>
                            <li className="nav-item">
                                {
                                store.auth === true && (
                                    <Link to={"/carrito"}
                                        className="nav-link">
                                        <span className="position-relative">
                                            <AiOutlineShop style={
                                                {
                                                    width: "30px",
                                                    height: "30px",
                                                    color: carritoCount > 0 ? "green" : ""
                                                }
                                            }/> {
                                            carritoCount > 0 && (
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                                    style={
                                                        {fontSize: "12px"}
                                                }>
                                                    {carritoCount} </span>
                                            )
                                        } </span>
                                    </Link>
                                )
                            } </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

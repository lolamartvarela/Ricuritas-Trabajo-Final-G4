import React, {useContext, useState, useEffect} from "react";
import {Link, Navigate} from "react-router-dom";
import {AiOutlineShop} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import Logo from "../component/logo/logo.jpg";
import {Context} from "../store/appContext";

export const Navbar = () => {
    const {store, actions} = useContext(Context);
    const [opacity, setOpacity] = useState(1);

    function handleLogout() {
        actions.logout(); <Navigate to="/"/>;
    }


    // ? Este useEffect controla si existe desplazamiento en la página para darle transparencia al navbar
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setOpacity(0.8);
        } else {
            setOpacity(1);
        }
    };


    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="col-12 d-flex justify-content-end px-5">
                    {
                    store.auth === false ? (
                        <Link to={"/login"}
                            className="btn btn-warning me-1">
                            Login
                        </Link>
                    ) : null
                }
                    {
                    store.auth === false ? (
                        <Link to={"/register"}
                            className="btn btn-warning me-1">
                            Register
                        </Link>
                    ) : null
                }

                    {
                    store.auth === true ? (
                        <Link to={"/dashboard"}
                            className="btn btn-warning me-1">
                            Dashboard
                        </Link>
                    ) : null
                }
                    {
                    store.auth === true ? (
                        <Link to={"/"}
                            className="btn btn-warning me-1"
                            onClick={handleLogout}>
                            Logout
                        </Link>
                    ) : null
                }
                    {" "} </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
                style={
                    {opacity}
            }>
                <div className="navbar-brand mx-auto" href="#">
                    {/* LOGO */}
                    <div className="d-flex justify-content-center">
                        <img src={Logo}
                            alt="Logo"
                            style={
                                {
                                    width: "120px",
                                    height: "120px"
                                }
                            }/>
                    </div>

                    {/* Aqui compienzan los links del navbar */}
                    <div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <Link to={"/"}
                                    className="nav-link">
                                    Inicio
                                </Link>

                                <Link to={"/ViewComeConsciente/"}
                                    className="nav-link">
                                    Come consciente
                                </Link>

                                <li className="nav-item">
                                    <Link to={"/tips"}
                                        className="nav-link">
                                        Tips
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    {
                                    store.auth === true ? (
                                        <Link to={"/carrito"}
                                            className="nav-link">
                                            <AiOutlineShop/>
                                        </Link>
                                    ) : null
                                } </li>

                                <li className="nav-item">
                                    {/* Acá iría un dropdown para search. */}
                                    {" "} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

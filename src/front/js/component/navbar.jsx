import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {AiOutlineShop} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import Logo from "../component/logo/logo.jpg";
import {Context} from "../store/appContext";
// import {AiOutlineMinus} from "react-icons/ai";

export const Navbar = () => {
    const {store, actions} = useContext(Context)
    const [opacity, setOpacity] = useState(1);

    function handleLogout() {
        actions.logout() // cerrar la sesiono
        navigate("/") // usamos navigate para redireccionar
    }

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
                    store.auth === false ? <Link to={"/login"}
                        className="btn btn-warning me-1">Login</Link> : null
                }

                    {
                    store.auth === false ? <Link to={"/register"}
                        className="btn btn-warning me-1">Register</Link> : null
                }

                    {
                    store.auth === true ? <button className="btn btn-warning me-1"
                        onClick={handleLogout}>Logout</button> : null
                } </div>

            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
                style={
                    {opacity}
            }>
                <a className="navbar-brand mx-auto" href="#">

                    {/* LOGO */}
                    <div className="d-flex justify-content-center">
                        <img src={Logo}
                            alt="Logo"
                            style={
                                {
                                    width: "120px",
                                    height: "120px"
                                }
                            }/></div>

                    {/* Aqui compienzan los links del navbar */}
                    <div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <Link to={"/"}
                                    className="nav-link">Inicio</Link>
                                {/* <AiOutlineMinus/> */}
                                <Link to={"/ViewComeConsciente/"}
                                    className="nav-link">Come consciente</Link>
                                {/* <AiOutlineMinus/> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Tips
                                    </a>
                                </li>
                                {/* <AiOutlineMinus/> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <AiOutlineShop/>
                                    </a>
                                </li>
                                {/* <AiOutlineMinus/> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <BsSearch/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
            </nav>
        </>
    );
};

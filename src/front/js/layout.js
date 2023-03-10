import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Admin_Login from "./pages/admin-login";
import {Register} from "./pages/register";

import {Home} from "./pages/home.jsx";
import {Single} from "./pages/single";
import injectContext from "./store/appContext";

import {Navbar} from "./component/navbar.jsx";
import {Footer} from "./component/footer.jsx";

import PayConfirm from "./component/payconfirm.jsx";

import {ViewCadaMenu} from "./pages/ViewCadaMenu.jsx";
import {ViewCadaMenuVegano} from "./pages/ViewCadaMenuVegano.jsx";
import {ViewComeConsciente} from "./pages/ViewComeConsciente.jsx";
import {ViewSobreNosotros} from "./pages/ViewSobreNosotros.jsx";
import Carrusel from "./pages/Tips.jsx";
import Perfil from "./pages/perfil.jsx";
import CarritoCompras from "./pages/carrito";

// create your first component
const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar/>
                    <Routes>
                        <Route path="/tips"
                            element={<Carrusel/>}/>
                        <Route path="/carrito"
                            element={<CarritoCompras/>}/>
                        <Route path="/ViewComeConsciente"
                            element={<ViewComeConsciente/>}/>
                        <Route path="/ViewSobreNosotros"
                            element={<ViewSobreNosotros/>}/>
                        <Route path="/ViewCadaMenu"
                            element={<ViewCadaMenu/>}/>
                        <Route path="/ViewCadaMenuVegano"
                            element={<ViewCadaMenuVegano/>}/>
                        <Route path="/perfil"
                            element={<Perfil/>}/>
                        <Route element={<Home/>}
                            path="/"/>
                        <Route element={<Login/>}
                            path="/login"/>
                        <Route element={<Admin_Login/>}
                            path="/admin-login"/>
                        <Route element={<Dashboard/>}
                            path="/dashboard"/>
                        <Route element={<Register/>}
                            path="/register"/>
                        <Route element={<PayConfirm/>}
                            path="/route-to-pay-12345"/>
                        <Route element={<Single/>}
                            path="/single/:theid"/>
                        <Route element={
                            <h1>Not found!</h1>
                        }/>
                    </Routes>
                    {" "}
                    <Footer/>
                </ScrollToTop>
                {" "} </BrowserRouter>
            {" "} </div>
    );
};

export default injectContext(Layout);

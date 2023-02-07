import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Login from "./pages/login"
import Admin_Dashboard from "./pages/admin-dashboard"
import Admin_Login from "./pages/admin-login";
import {Register} from "./pages/register"

import {Home} from "./pages/home";
import {Demo} from "./pages/demo";
import {Single} from "./pages/single";
import injectContext from "./store/appContext";

import {Navbar} from "./component/navbar.jsx";
import {Footer} from "./component/footer.jsx";

// create your first component
const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (<div>
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Navbar/>
                <Routes>
                    <Route element={<Home/>}
                        path="/"/>
                    <Route element={<Demo/>}
                        path="/demo"/>
                    <Route element={<Login/>}
                        path="/login"/>
                    <Route element={<Admin_Login/>}
                        path="/admin-login"/>
                    <Route element={<Admin_Dashboard/>}
                        path="/admin-dashboard"/>
                    <Route element={<Register/>}
                        path="/register"/>
                    <Route element={<Single/>}
                        path="/single/:theid"/>
                    <Route element={
                        <h1>Not found!</h1>
                    }/>
                </Routes>
                <Footer/>
            </ScrollToTop>
        </BrowserRouter>
    </div>);
};

export default injectContext(Layout);

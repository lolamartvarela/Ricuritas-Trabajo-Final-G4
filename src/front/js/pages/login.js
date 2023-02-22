import React, {useContext, useState} from "react";
import {Context} from "../store/appContext";
import {Navigate, Link} from "react-router-dom";
import RecuperarPass from "../component/recuperar-pass";

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store, actions} = useContext(Context);

    function enviarDatos(e) {
        e.preventDefault();
        actions.login(email, password);
        setEmail("");
        setPassword("");
        console.log(email, password);
    }

    return (
        <> {" "}
            {
            store.auth === true ? (
                <Navigate to="/"/>
            ) : (
                <form className="container-sm d-flex flex-column justify-content-center align-items-center w-75"
                    onSubmit={enviarDatos}>

                    <h4 className="mb-4 mt-2">Inicio de sesión</h4>

                    <div className="col-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }/>
                        <div id="emailHelp" className="form-text">
                            Nunca compartiremos tu email con nadie más
                        </div>

                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input type="password" className="mb-3 form-control" id="exampleInputPassword1"
                            value={password}
                            onChange={
                                (e) => setPassword(e.target.value)
                            }/>
                    </div>

                    <div className="d-flex justify-content-center align-items-center w-100 mb-5">
                        <button type="submit" className="btn bgbuttonverde text-white rounded-pill mx-2 mt-2">
                            Iniciar sesión
                        </button>

                        <button type="button" className="btn borderbottom rounded-pill mx-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>
                </form>
            )
        }
            <div>
                <RecuperarPass/>
            </div>
        </>
    );
}

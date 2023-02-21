import React, {useContext, useState} from 'react';
import {Context} from "../store/appContext";
import {Navigate, Link} from "react-router-dom"
import RecuperarPass from '../component/recuperar-pass';


export default function login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {store, actions} = useContext(Context)

    function enviarDatos(e) {
        e.preventDefault()
        actions.login(email, password)
        setEmail("")
        setPassword("")
        console.log(email, password)
    }


    return (
        <> {
            store.auth === true ? <Navigate to="/"/> : <div className='container'>
                <div className="row justify-content-center"
                    onSubmit={enviarDatos}>
                    <h4 className="text-center mb-5">Inicio de sesión</h4>
                    <div className='col-4'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }/>
                            <div id="emailHelp" className="form-text">Nunca compartiremos tu email con nadie más</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label mb-2">Contraseña</label>
                            <input type="password" className="form-control mb-5" id="exampleInputPassword1"
                                value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }/>
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning btn-block mb-2">Ingresar</button>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-light border btn-block mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                ¿Olvidaste tu contraseña?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
            <div>
                <RecuperarPass/>
            </div>
        </>
    )
}

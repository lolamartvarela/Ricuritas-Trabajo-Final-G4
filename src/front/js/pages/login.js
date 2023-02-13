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
            store.auth === true ? <Navigate to="/"/> : <form className='container w-25 text-center divHeight'
                onSubmit={enviarDatos}>
                <h4 className='m-5'>Inicio de sesión</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }/>
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu email con nadie más</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={
                            (e) => setPassword(e.target.value)
                        }/>
                </div>

                <button type="submit" className="btn btn-primary">Loguearse</button>
                <button type="button" className="btn btn-primary mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    ¿Olvidaste tu contraseña?
                </button>
            </form>
        }
            <div>
                <RecuperarPass/>
            </div>
        </>
    )
}

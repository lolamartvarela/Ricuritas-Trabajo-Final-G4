import React, {useContext, useState} from "react";
import {Context} from "../store/appContext";
import {Navigate} from "react-router-dom";
import swal from 'sweetalert'


export const Register = () => {
    const [email, setEmail] = useState("");
    const [user_name, setUser_Name] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const {store, actions} = useContext(Context);

    function enviarDatos(e) {
        e.preventDefault();
        if (!email || !nombre || !apellido || !user_name || !password) {
            return swal("Complete todos los campos", "No es posible registrarse si tiene algún campo vacío");
        }
        actions.register(email, user_name, nombre, apellido, password);
        setEmail("");
        setNombre("");
        setApellido("");
        setUser_Name("");
        setPassword("");
        console.log(email, user_name, nombre, apellido, password);
    }

    return (
        <> {" "}
            {
            store.auth === true ? (
                <Navigate to="/"/>
            ) : (
                <form className="container-sm divHeight w-75"
                    onSubmit={enviarDatos}>

                    <div className="row">
                        <div className="justify-content-center">

                            <div className="col-4">
                                <h3 className="mb-3 mt-3 text-center">Nuevo usuario</h3>
                            </div>

                            {/* Mail */}
                            <div className="col-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Dirección de email
                                </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={email}
                                    onChange={
                                        (e) => setEmail(e.target.value)
                                    }/>
                                <div id="emailHelp" className="mb-3 form-text">
                                    Nunca compartiremos tu email con nadie más
                                </div>
                            </div>

                            {/* Nombre */}
                            <div className="col-4">
                                <label htmlFor="exampleInputUserName1" className="form-label">
                                    Nombe de usuario
                                </label>
                                <input type="text" className="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp"
                                    value={nombre}
                                    onChange={
                                        (e) => setNombre(e.target.value)
                                    }/>
                                <div id="userNameHelp" className="mb-3 form-text">
                                    Aquí va su nombre
                                </div>
                            </div>

                            {/* Apellido */}
                            <div className="col-4">
                                <label htmlFor="exampleInputUserName2" className="form-label">
                                    Apellido de usuario
                                </label>
                                <input type="text" className="form-control" id="exampleInputUserName2" aria-describedby="userNameHelp"
                                    value={apellido}
                                    onChange={
                                        (e) => setApellido(e.target.value)
                                    }/>
                                <div id="userNameHelp" className="mb-3 form-text">
                                    Aquí va su apellido
                                </div>
                            </div>

                            {/* Usuario */}
                            <div className="col-4">
                                <label htmlFor="exampleInputUserName3" className="form-label">
                                    Username
                                </label>
                                <input type="text" className="form-control" id="exampleInputUserName3" aria-describedby="userNameHelp"
                                    value={user_name}
                                    onChange={
                                        (e) => setUser_Name(e.target.value)
                                    }/>
                                <div id="userNameHelp" className="mb-3 form-text">
                                    Elija un nombre de usuario
                                </div>
                            </div>

                            {/* Contraseña */}
                            <div className="col-4">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"
                                    value={password}
                                    onChange={
                                        (e) => setPassword(e.target.value)
                                    }/>
                                <div id="passwordHelp" className="mb-3 form-text">
                                    Elija una clave segura
                                </div>
                            </div>

                            {/* Boton */}
                            <button type="submit" className="col-4 mb-3 btn bgbuttonverde text-white rounded-pill">
                                Enviar
                            </button>
                        </div>
                    </div>

                </form>
            )
        }
            {" "} </>
    );
};

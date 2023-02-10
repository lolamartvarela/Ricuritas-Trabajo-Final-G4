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
                <form className="container w-50 text-center divHeight"
                    onSubmit={enviarDatos}>
                    <h4 className="m-5">Creación de nuevo usuario</h4>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Dirección de email
                        </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }/>
                        <div id="emailHelp" className="form-text">
                            Nunca compartiremos tu email con nadie más
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">
                            Nombe de usuario
                        </label>
                        <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="userNameHelp"
                            value={nombre}
                            onChange={
                                (e) => setNombre(e.target.value)
                            }/>
                        <div id="userNameHelp" className="form-text">
                            Aquí va su nombre
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">
                            Apellido de usuario
                        </label>
                        <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="userNameHelp"
                            value={apellido}
                            onChange={
                                (e) => setApellido(e.target.value)
                            }/>
                        <div id="userNameHelp" className="form-text">
                            Aquí va su apellido
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">
                            Username
                        </label>
                        <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="userNameHelp"
                            value={user_name}
                            onChange={
                                (e) => setUser_Name(e.target.value)
                            }/>
                        <div id="userNameHelp" className="form-text">
                            Elija un nombre de usuario
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"
                            value={password}
                            onChange={
                                (e) => setPassword(e.target.value)
                            }/>
                        <div id="passwordHelp" className="form-text">
                            Elija una clave segura
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            )
        }
            {" "} </>
    );
};

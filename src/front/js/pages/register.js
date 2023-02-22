import React, {useContext, useState} from "react";
import {Context} from "../store/appContext";
import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router-dom";
import swal from 'sweetalert'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [user_name, setUser_Name] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    function enviarDatos(e) {
        e.preventDefault();
        if (!email || !nombre || !apellido || !user_name || !password) {
            return swal({title: "Algo ha salido mal!", text: "Debe completar todos los campos para crear un nuevo usuario.", icon: "error", button: "Cerrar"});
        }
        if (password.length < 5) {
            return swal({title: "Algo ha salido mal!", text: "Debe ingresar un password de al menos cinco caracteres.", icon: "error", button: "Cerrar"});
        }
        actions.register(email, user_name, nombre, apellido, password);
        setEmail("");
        setNombre("");
        setApellido("");
        setUser_Name("");
        setPassword("");
        console.log(email, user_name, nombre, apellido, password);
        swal({title: "Bienvenide!", text: "Su usuario ha sido creado con éxito", icon: "success", button: "Cerrar"}).then(() => navigate("/login"));
    }

    return (<> {" "}
        {
        store.auth === true ? (<Navigate to="/"/>) : (<form className="container-sm w-75 text-center divHeight"
            onSubmit={enviarDatos}>
            <h4 className="m-5">Nuevo usuario</h4>
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
                <label htmlFor="exampleInputUserName1" className="form-label">
                    Nombe de usuario
                </label>
                <input type="text" className="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp"
                    value={nombre}
                    onChange={
                        (e) => setNombre(e.target.value)
                    }/>
                <div id="userNameHelp" className="form-text">
                    Aquí va su nombre
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputUserName2" className="form-label">
                    Apellido de usuario
                </label>
                <input type="text" className="form-control" id="exampleInputUserName2" aria-describedby="userNameHelp"
                    value={apellido}
                    onChange={
                        (e) => setApellido(e.target.value)
                    }/>
                <div id="userNameHelp" className="form-text">
                    Aquí va su apellido
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputUserName3" className="form-label">
                    Username
                </label>
                <input type="text" className="form-control" id="exampleInputUserName3" aria-describedby="userNameHelp"
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
                Enviar
            </button>
        </form>)
    }
        {" "} </>);
};

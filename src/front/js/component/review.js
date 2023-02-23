import React, {useState, useContext} from "react";
import {Context} from "../store/appContext";
import {BsFillStarFill} from "react-icons/bs";

export default function Review() {
    const {actions} = useContext(Context);
    const [comentario, setComentario] = useState("");
    const [puntos, setPuntos] = useState("");
    let username = localStorage.getItem("username");

    function enviarDatos(e) {
        e.preventDefault();
        if (!comentario || !puntos) {
            swal({
                title: "Error",
                text: "Por favor, completa todos los campos",
                icon: "error",
                buttons: {
                    cerrar: {
                        text: "Cerrar",
                        className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                    }
                },
                buttonsStyling: false
            });
            return;
        }
        actions.createReview(username, puntos, comentario);
        setComentario("");
        setPuntos("");
        swal({
            title: "Comentario enviado",
            text: "¡Gracias por tu opinión!",
            icon: "success",
            buttons: {
                cerrar: {
                    text: "Cerrar",
                    className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                }
            },
            buttonsStyling: false
        });
    }
    return (
        <form className="container-sm d-flex flex-column justify-content-center align-items-center w-75"
            onSubmit={enviarDatos}>
            <fieldset>
                <h4 className="mt-4 mb-3">
                    Califícanos!
                    <BsFillStarFill className="text-warning"/>
                </h4>
                {" "}
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                        Escribe tu reseña aquí{" "} </label>
                    {" "}
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Su reseña"
                        onChange={
                            (e) => setComentario(e.target.value)
                        }
                        value={comentario}/>{" "} </div>
                {" "}
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">
                        {" "}
                        ¿En cuantos puntos valora nuestro servicio ?
                    </label>
                    {" "}
                    <select id="disabledSelect" className="form-select"
                        onChange={
                            (e) => setPuntos(e.target.value)
                        }
                        value={puntos}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        {" "} </select>
                    {" "} </div>
                {" "}
                <button type="submit" className="mb-5 mt-3 col-12 btn bgbuttonverde text-white rounded-pill">
                    Enviar{" "} </button>
                {" "} </fieldset>
            {" "} </form>
    );
}

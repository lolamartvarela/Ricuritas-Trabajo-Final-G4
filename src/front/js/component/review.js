import React, {useState, useContext} from "react";
import {Context} from "../store/appContext";
import {AiFillStar} from "react-icons/ai"

export default function Review() {
    const {actions} = useContext(Context)
    const [comentario, setComentario] = useState("");
    const [puntos, setPuntos] = useState("");
    let username = localStorage.getItem("username");

    function enviarDatos(e) {
        e.preventDefault();
        actions.createReview(username, puntos, comentario);
        setComentario("");
        setPuntos("");
    }
    return (
        <form className="w-50 m-auto"
            onSubmit={enviarDatos}>
            <fieldset>
                <h4 className="mb-3 mt-3">
                    Califícanos < AiFillStar className="text-warning"/>
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
                        <option value="1">
                            1
                        </option>
                        <option value="2">
                            2
                        </option>
                        {" "}
                        <option value="3">
                            3
                        </option>
                        <option value="4">
                            4
                        </option>
                        {" "}
                        <option value="5">
                            5
                        </option>
                        {" "} </select>
                    {" "} </div>
                {" "}
                <button type="submit" className="btn bgbuttonverde text-white rounded-pill mb-5">
                    Submit{" "} </button>
                {" "} </fieldset>
            {" "} </form>
    );
}

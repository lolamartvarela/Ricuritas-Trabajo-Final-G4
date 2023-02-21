import React, { useState } from "react";

export default function Review() {
  const [reseña, setReseña] = useState("");
  const [puntaje, setPuntaje] = useState("");
  let username = localStorage.getItem("username");

  function enviarDatos(e) {
    e.preventDefault();
    actions.createReview(username, reseña, puntaje);
    setReseña("");
    setPuntaje("");
  }
  return (
    <form className="w-50 m-auto" onSubmit={enviarDatos}>
      <fieldset>
        <legend> Califícanos! </legend>{" "}
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Escribe tu reseña aquí{" "}
          </label>{" "}
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="Su reseña"
            onChange={(e) => setTipoMenu(e.target.value)}
            value={reseña}
          />{" "}
        </div>{" "}
        <div className="mb-3">
          <label for="disabledSelect" className="form-label">
            {" "}
            ¿En cuantos puntos valora nuestro servicio ?
          </label>{" "}
          <select
            id="disabledSelect"
            className="form-select"
            onChange={(e) => setTipoMenu(e.target.value)}
            value={puntaje}
          >
            <option value="1"> 1 </option> <option value="2"> 2 </option>{" "}
            <option value="3"> 3 </option> <option value="4"> 4 </option>{" "}
            <option value="5"> 5 </option>{" "}
          </select>{" "}
        </div>{" "}
        <button type="submit" className="btn btn-primary">
          Submit{" "}
        </button>{" "}
      </fieldset>{" "}
    </form>
  );
}

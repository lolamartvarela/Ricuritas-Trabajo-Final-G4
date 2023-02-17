//
import React, {useContext} from "react";
import {Context} from "../store/appContext";

export default function BorrarMenu() {

    const {store, actions} = useContext(Context);


    const mostrarMenu = () => {
        return store.cadaMenu.map((menu, index) => (
            <li key={index}>
                <span className="me-3">
                    {
                    menu.title
                }</span>
                -
                <span className="me-3">
                    {
                    menu.tipo_menu
                }</span>
                -
                <button className="ms-3"
                    onClick={
                        () => actions.borrarMenu(menu.id)
                }>Borrar</button>
            </li>
        ));
    };

    return (
        <div>
            <h2>Lista de Menús Disponibles</h2>
            <ul>{
                mostrarMenu()
            }</ul>
        </div>
    );
};

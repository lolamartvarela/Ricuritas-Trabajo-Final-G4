//
import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {FaTrash} from "react-icons/fa";

export default function BorrarMenu() {

    const {store, actions} = useContext(Context);


    const mostrarMenu = () => {
        return store.cadaMenu.map((menu, index) => (
            <div className="d-flex justify-content-between">
                <div className="mx-1"
                    key={index}>
                    • {
                    menu.title
                }: {
                    menu.tipo_menu
                } </div>

                <div>
                    <FaTrash className="mx-4"
                        onClick={
                            () => actions.borrarMenu(menu.id)
                        }/>
                </div>
            </div>
        ));
    };

    return (
        <div className="card col-lg-6 col-md-6">
            <h2 className="text-center mt-3 mb-3">Lista de Menús Disponibles</h2>
            <ul>{
                mostrarMenu()
            }</ul>
        </div>
    );
};

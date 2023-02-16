import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Menu} from "../component/cardMenu.jsx"


import "../../styles/home.css";


export const Home = () => {
    const {store} = useContext(Context);

    const menuesComun = store.cadaMenu.filter((menu) => menu.tipo_menu === "Común");

    const menuesVegetarianos = store.cadaMenu.filter((menu) => menu.tipo_menu === "Vegetariano");

    return (
        <div className="d-block flex-wrap">

            {/* MAP PARA MENU COMÚN */}
            <h2 className="mx-4 text-center text-info">Menú común</h2>
            <div className="d-flex justify-content-evenly mt-4 mb-4 mx-2">
                {
                menuesComun.map((menu, index) => (< Menu key = {
                    index
                }
                id = {
                    store.cadaMenu.findIndex(m => m === menu)
                }

                nombre = {
                    menu.title
                }
                imagen = {
                    menu.url
                }
                precio = {
                    menu.price
                } />))
            } </div>

            {/* MAP PARA VENU VEGETARIANO */}
            <h2 className="mx-4 text-center text-info">Menú Vegetariano</h2>
            <div className="d-flex justify-content-evenly mt-4 mb-5 mx-2">
                {
                menuesVegetarianos.map((menu, index) =>< Menu key = {
                    index
                }
                nombre = {
                    menu.title
                }
                id = {
                    store.cadaMenu.findIndex(m => m === menu)
                }
                imagen = {
                    menu.url
                }

                precio = {
                    menu.price
                } />)
            } </div>
        </div>


    );
};

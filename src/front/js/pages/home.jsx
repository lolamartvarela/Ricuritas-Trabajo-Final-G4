import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Menu} from "../component/cardMenu.jsx"
import {MenuVegano} from "../component/cardMenuVegano.jsx"

import "../../styles/home.css";


export const Home = () => {
    const {store} = useContext(Context);

    console.log(store.cadaMenuVegano);

    const menuesComun = store.cadaMenu.filter((menu) => menu.tipo_menu === "Común")

    const menuesVegetarianos = store.cadaMenu.filter((menu) => menu.tipo_menu === "Vegetariano")

    return (
        <div className="d-block flex-wrap">

            {/* MAP PARA MENU COMUN */}
            <h2 className="mx-4">Menú común</h2>
            <div className="d-flex justify-content-evenly mt-4 mb-4 mx-2">
                {
                menuesComun.map((menu, index) => (< Menu key = {
                    index
                }

                id = {
                    index
                }

                nombre = {
                    menu.title
                }
                id = {
                    index
                }
                imagen = {
                    menu.url
                } />))
            } </div>

            {/* MAP PARA VENU VEGANO */}
            <h2 className="mx-4">Menú vegano</h2>
            <div className="d-flex justify-content-evenly mt-4 mb-5 mx-2">
                {
                menuesVegetarianos.map((menu, index) =>< MenuVegano key = {
                    index
                }
                nombre = {
                    menu.title
                }
                id = {
                    index
                }
                imagen = {
                    menu.url
                } />)
            } </div>
        </div>


    );
};


{ /* <div className="d-flex flex-nowrap row row-cols-4"> {store.menu.map((cadaMenu, index) =>< Menu key = {index}
            id = {index}nombre = { cadaMenu.nombre} />)}</div>


        <div className="d-flex flex-nowrap row row-cols-4"> {store.menuVegano.map((cadaMenuVegano, index) =>< MenuVegano key = {
                index} id = {index }nombre = {cadaMenuVegano.nombre} />) }</div> */
}

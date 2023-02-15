import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Menu} from "../component/cardMenu.jsx"
import {MenuVegano} from "../component/cardMenuVegano.jsx"

import "../../styles/home.css";


export const Home = () => {
    const {store} = useContext(Context);

    console.log(store.cadaMenuVegano);

    return (
        <div className="d-flex flex-wrap">

            {/* MAP PARA MENU COMUN */}
            <h2 className="mx-4">Menú común</h2>
            <div className="d-flex justify-content-evenly mt-4 mb-4 mx-2">
                {
                store.cadaMenu.map((menuComun, index) => (< Menu key = {
                    index
                }
                nombre = {
                    menuComun.title
                }
                id = {
                    index
                }
                imagen = {
                    menuComun.url
                } />))
            } </div>

            {/* MAP PARA VENU VEGANO */}
            <h2 className="mx-4">Menú vegano</h2>
            <div className="d-flex justify-content-evenly mt-4 mb-5 mx-2">
                {
                store.cadaMenu.map((menuVegano, index) =>< MenuVegano key = {
                    index
                }
                nombre = {
                    menuVegano.title
                }
                imagen = {
                    menuVegano.url
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

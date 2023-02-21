import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Menu} from "../component/cardMenu.jsx"


import "../../styles/home.css";
import ShowReviews from "../component/showreviews.jsx";


export const Home = () => {
    const {store} = useContext(Context);

    const menuesComun = store.cadaMenu.filter((menu) => menu.tipo_menu === "Común");

    const menuesVegetarianos = store.cadaMenu.filter((menu) => menu.tipo_menu === "Vegetariano");

    return (
        <div> {/* MAP PARA MENU COMÚN */}
            <h2 className="text-center bg-warning text-white">Menú común</h2>

            <div className="row mt-4 mb-4 mx-5">
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
            <h2 className="text-center bg-warning text-white">Menú Vegetariano</h2>
            <div className="row mt-4 mb-5 mx-5">
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
            <ShowReviews/>
        </div>


    );
};

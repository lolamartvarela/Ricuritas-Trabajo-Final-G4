import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Menu} from "../component/cardMenu.jsx"
import {MenuVegano} from "../component/cardMenuVegano.jsx"
import "../../styles/home.css";


export const Home = () => {
    const {store} = useContext(Context);


    return (
        <div className="divHeight">
            <div className="d-flex justify-content-around mt-4 mb-4">
                <Menu/>
                <Menu/>
                <Menu/>
                <Menu/>
            </div>

            <div className="d-flex justify-content-around mt-4 mb-5">
                <MenuVegano/>
                <MenuVegano/>
                <MenuVegano/>
                <MenuVegano/>
            </div>

        </div>
    );
};


{ /* <div className="d-flex flex-nowrap row row-cols-4"> {store.menu.map((cadaMenu, index) =>< Menu key = {index}
            id = {index}nombre = { cadaMenu.nombre} />)}</div>


        <div className="d-flex flex-nowrap row row-cols-4"> {store.menuVegano.map((cadaMenuVegano, index) =>< MenuVegano key = {
                index} id = {index }nombre = {cadaMenuVegano.nombre} />) }</div> */
}

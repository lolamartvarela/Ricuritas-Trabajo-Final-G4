//
import React, {useState, useContext} from 'react'
import {Context} from "../store/appContext";

export default function MenuCreator() {

    const {store, actions} = useContext(Context)

    const [tipoMenu, setTipoMenu] = useState("")
    const [nombreMenu, setNombreMenu] = useState("")
    const [descriptionMenu, setDescriptionMenu] = useState("")
    const [precioMenu, setPrecioMenu] = useState("")
    const [urlMenu, setUrlMenu] = useState("")


    function enviarDatos(e) {
        e.preventDefault()
        actions.createMenu(tipoMenu, nombreMenu, descriptionMenu, precioMenu, urlMenu)
        setTipoMenu("")
        setNombreMenu("")
        setDescriptionMenu("")
        setPrecioMenu("")
        setUrlMenu("")
        console.log(tipoMenu, nombreMenu, descriptionMenu, precioMenu, urlMenu)
    }


    return (
        <form className='container w-50'
            onSubmit={enviarDatos}>

            <div className="mb-3">
                <label htmlFor="MenuType" className="form-label">Tipo de Menú</label>
                <input type="text" id="MenuType" className="form-control" placeholder="Tipo de Menú"
                    value={tipoMenu}
                    onChange={
                        (e) => setTipoMenu(e.target.value)
                    }/>
            </div>


            <div className="mb-3">
                <label htmlFor="MenuName" className="form-label">Nombre de Menú</label>
                <input type="text" id="MenuName" className="form-control" placeholder="Nombre de Menú"
                    value={nombreMenu}
                    onChange={
                        (e) => setNombreMenu(e.target.value)
                    }/>
            </div>

            <div className="mb-3">
                <label htmlFor="MenuDescription" className="form-label">Descripción</label>
                <input type="text" id="MenuDescription" className="form-control" placeholder="Descripción del Menú"
                    value={descriptionMenu}
                    onChange={
                        (e) => setDescriptionMenu(e.target.value)
                    }/>
            </div>

            <div className="mb-3">
                <label htmlFor="MenuPrice" className="form-label">Precio</label>
                <span>$</span><input type="text" id="MenuPrice" className="form-control" placeholder="Precio de Menú"
                    value={precioMenu}
                    onChange={
                        (e) => setPrecioMenu(e.target.value)
                    }/>
            </div>

            <div className="mb-3">
                <label htmlFor="ImageUrl" className="form-label">URL de Imagen</label>
                <input type="text" id="ImageUrl" className="form-control" placeholder="Imagen del Menú"
                    value={urlMenu}
                    onChange={
                        (e) => setUrlMenu(e.target.value)
                    }/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}

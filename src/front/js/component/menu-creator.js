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

    async function enviarDatos(e) {
        e.preventDefault();

        const data = new FormData();
        data.append("file", urlMenu);
        data.append("upload_preset", "kxtirvhp");
        data.append("cloud_name", "deqzwxlgq");

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/deqzwxlgq/image/upload", {
                method: "post",
                body: data
            });
            const cloudinaryData = await res.json();
            const imageUrl = cloudinaryData.secure_url;

            // Envío de los datos del formulario y la URL de la imagen a Flask
            actions.createMenu(tipoMenu, nombreMenu, descriptionMenu, precioMenu, imageUrl);
            setTipoMenu("");
            setNombreMenu("");
            setDescriptionMenu("");
            setPrecioMenu("");
            setUrlMenu("");
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <form className='container w-50'
            onSubmit={enviarDatos}>
            <div>
                <h1>Puede crear un nuevo menú</h1>
            </div>
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
                <input type="file" id="ImageUrl"
                    onChange={
                        (e) => setUrlMenu(e.target.files[0])
                    }
                    className="form-control"
                    placeholder="Imagen del Menú"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}

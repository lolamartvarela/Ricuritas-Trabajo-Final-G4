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

        if (!tipoMenu || !nombreMenu || !descriptionMenu || !precioMenu || !urlMenu) {
            return swal({
                title: "Algo ha salido mal!",
                text: "Debe completar todos los campos para crear un nuevo menú.",
                icon: "error",
                buttons: {
                    cerrar: {
                        text: "Cerrar",
                        className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                    }
                },
                buttonsStyling: false
            });
        }

        // Validación de caracteres especiales
        const regExp = /[!@#$%^&*()?":{}|<>]/;
        if (regExp.test(tipoMenu) || regExp.test(nombreMenu) || regExp.test(descriptionMenu)) {
            return swal({
                title: "Algo ha salido mal!",
                text: "No se permiten caracteres especiales en los campos de texto.",
                icon: "error",
                buttons: {
                    cerrar: {
                        text: "Cerrar",
                        className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                    }
                },
                buttonsStyling: false
            });
        }

        if (isNaN(parseInt(precioMenu))) {
            return swal({
                title: "Algo ha salido mal!",
                text: "El campo de precio solo acepta números enteros.",
                icon: "error",
                buttons: {
                    cerrar: {
                        text: "Cerrar",
                        className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                    }
                },
                buttonsStyling: false
            });
        }

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
            swal({
                title: "Muy Bien!",
                text: "Un nuevo Menú ha sido creado con todo éxito",
                icon: "success",
                buttons: {
                    cerrar: {
                        text: "Cerrar",
                        className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                    }
                },
                buttonsStyling: false
            });
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <form className='mx-1 flex-column align-items-center'
            onSubmit={enviarDatos}>
            <div className='col-12 col-sm-10 col-md-12 col-xl-12'>
                <div>
                    <h2 className='mb-3 text-secondary'>Crear nuevo menú</h2>
                </div>
                <div className="col-6">
                    <label htmlFor="MenuType" className="form-label">Tipo de Menú</label>
                    <select id="MenuType" className="form-control"
                        value={tipoMenu}
                        onChange={
                            (e) => setTipoMenu(e.target.value)
                    }>
                        <option value="">Seleccione una opción</option>
                        <option value="Común">Común</option>
                        <option value="Vegetariano">Vegetariano</option>
                    </select>
                </div>

                <div className="col-6">
                    <label htmlFor="MenuName" className="form-label mt-3">Nombre de Menú</label>
                    <input type="text" id="MenuName" className="form-control" placeholder="Nombre de Menú"
                        value={nombreMenu}
                        onChange={
                            (e) => setNombreMenu(e.target.value)
                        }/>
                </div>

                <div className="col-6">
                    <label htmlFor="MenuDescription" className="form-label mt-3">Descripción</label>
                    <input type="text" id="MenuDescription" className="form-control" placeholder="Descripción del Menú"
                        value={descriptionMenu}
                        onChange={
                            (e) => setDescriptionMenu(e.target.value)
                        }/>
                </div>

                <div className="col-6">
                    <label htmlFor="MenuPrice" className="form-label mt-3">Precio</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="number" id="MenuPrice" className="form-control" placeholder="Precio de Menú"
                            value={precioMenu}
                            onChange={
                                (e) => setPrecioMenu(parseInt(e.target.value))
                            }/>
                    </div>
                </div>

                <div className="col-6">
                    <label htmlFor="ImageUrl" className="form-label mt-3">URL de Imagen</label>
                    <input type="file" id="ImageUrl"
                        onChange={
                            (e) => setUrlMenu(e.target.files[0])
                        }
                        className="form-control"
                        placeholder="Imagen del Menú"/>
                </div>
                <button type="submit" className="col-6 btn bgbuttonverde text-white rounded-pill mt-4">Crear</button>
            </div>
        </form>
    )
}

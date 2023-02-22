import React, {useState, useContext} from 'react';
import axios from 'axios';
import {Context} from '../store/appContext';
import swal from 'sweetalert'


const RecuperarPass = () => {
    const [emailRecovery, setEmailRecovery] = useState("")
    const {store, actions} = useContext(Context);

    function recuperarMail(e) {
        e.preventDefault()
        setEmailRecovery("")
        enviarCorreo(emailRecovery)
    }

    const enviarCorreo = (email) => {
        actions.recoverMail(email).then(response => {
            swal("Contraseña enviada exitosamente", "", "success");
        }).catch(error => {
            console.log(error);
        });
    }

    return (

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Recuperar Contraseña</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={recuperarMail}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">Dirección de email</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
                                    value={emailRecovery}
                                    onChange={
                                        (e) => setEmailRecovery(e.target.value)
                                    }/>
                                <div id="emailHelp" className="form-text">Nunca compartiremos tu información con nadie</div>
                            </div>
                            <button type="submit" className="btn bgbuttonverde text-white rounded-pill mx-2 mt-2">Enviar</button>
                            <button type="button" className="btn borderbottom rounded-pill mx-2 mt-2" data-bs-dismiss="modal">Cerrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecuperarPass;

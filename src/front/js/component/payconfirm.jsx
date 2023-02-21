//
import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {IoLogoWhatsapp} from "react-icons/io5";


export default function PayConfirm() {

    const navigate = useNavigate();

    // //? Esta función permite redireccionar automáticamente luego de 5 segundos a quién viste esta página
    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate("/");
        }, 15000);

        return() => {
            clearTimeout(redirect);
        }
    }, []);


    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="alert alert-success text-center" role="alert pt-5">
                    <h4 className="alert-heading">Gracias por su compra</h4>
                    <p>Su pago se ha realizado con éxito!</p>
                    <hr/>
                    <p className="mb-0">Por favor aguarde mientras lo redirigimos a la página principal</p>
                </div>
            </div>
            <div className='container text-center'>
                <h5>Si querés que te enviemos tu pedido, mandanos un mensaje a Whatsapp haciendo click en el botón de abajo</h5>
                <h5>De lo contrario será redirigído a la página principal en unos segundos</h5>
                <button style={
                        {
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            transition: 'transform 0.3s',
                            transform: 'scale(1)'
                        }
                    }
                    onClick={
                        (e) => {
                            e.currentTarget.style.transform = 'scale(0.9)';
                            window.location.href = "https://api.whatsapp.com/send?phone=598987654321";
                        }
                    }
                    onMouseUp={
                        (e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }
                }>
                    <IoLogoWhatsapp color="#25D366"
                        size={60}/>
                </button>
            </div>
        </>
    );
}

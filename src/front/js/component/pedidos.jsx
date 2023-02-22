import React, {useState, useEffect, useContext} from 'react';
import {Context} from "../store/appContext";
import {FaTrash} from 'react-icons/fa';

export default function Pedidos() {
    const [compras, setCompras] = useState([]);
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.obtenerCompras().then(data => {
            if (data !== undefined) {
                setCompras(data);
            }
        });
    }, []);

    const handleBorrarCompra = (id) => {
        actions.borrarCompra(id).then(response => {
            console.log(response);
            setCompras(compras.filter(compra => compra.id !== id));
        });
    };

    return (
        <div className="card col-lg-6 col-md-6">
            <h2 className="text-center mt-3 mb-3 text-secondary">Lista de Pedidos Disponibles</h2>

            {
            compras.length > 0 ? (
                <ul> {
                    compras.map(compra => (
                        <div className="d-flex justify-content-between"
                            key={
                                compra.id
                        }>
                            <div>
                                <span>
                                    • {
                                    compra.username
                                }:
                                </span>

                                <span> {
                                    compra.items
                                } </span>

                                <span className='fst-italic fw-bold'>
                                    ${
                                    compra.total_price
                                }</span>
                            </div>
                            <div>
                                <FaTrash className='mx-4'
                                    onClick={
                                        () => handleBorrarCompra(compra.id)
                                    }/></div>
                        </div>
                    ))
                } </ul>
            ) : (
                <h3 className='text-center textcolor'>Aún no hay ningún pedido disponible</h3>
            )
        } </div>
    );
}

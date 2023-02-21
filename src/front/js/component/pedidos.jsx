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
        <div> {
            compras.length > 0 ? (
                <ul> {
                    compras.map(compra => (
                        <li key={
                            compra.id
                        }>
                            <span>{
                                compra.username
                            }</span>
                            <span>-</span>
                            <span>{
                                compra.items
                            }</span>
                            <span>-</span>
                            <span>{
                                compra.total_price
                            }</span>
                            <span>-</span>
                            <FaTrash onClick={
                                () => handleBorrarCompra(compra.id)
                            }/>
                        </li>
                    ))
                } </ul>
            ) : (
                <h1>Aún no hay ningún pedido disponible</h1>
            )
        } </div>
    );
}

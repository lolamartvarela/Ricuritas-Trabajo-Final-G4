import React, {useContext, useEffect} from 'react';
import {Context} from '../store/appContext';

const Admin_Dashboard = () => {
    const {store, actions} = useContext(Context);
    // Aquí se realiza la llamada a la API para autenticar al usuario
    // Supongamos que el token JWT se almacena en la variable 'accessToken'

    console.log(store.auth)
    console.log(localStorage.getItem('admin'))

    if (localStorage.getItem('admin') === "34åÇkJhdkKhdf0'=)(675684fsg45sg744fs65g468sf4gJVvghhjksdfg8?=)(/$%32&ujsfdgjuibdgijk") {
        return (<div>
            <h1>Bienvenide queride Admin</h1>
        </div>)
    } else {
        return (<div>
            <h1>Acá no hay nada para ver</h1>
        </div>)
    }


};
export default Admin_Dashboard;

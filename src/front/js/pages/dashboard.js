import React, {useContext, useEffect} from 'react';
import {Context} from '../store/appContext';
import AdmindDashboard from './admin-dashboard';
import UserDashboard from './user-dashboard';
import MenuCreator from '../component/menu-creator';

const Dashboard = () => {
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.getUserRole();
    }, [store.auth, store.isAdmin]);


    if (store.isAdmin === true) {
        return (
            <>
                <AdmindDashboard/>
                <MenuCreator/>
            </>
        )

    } else if (store.auth === true) {
        return (
            <UserDashboard/>)
    } else {
        return (
            <div>
                <h1>Acá no hay nada para ver</h1>
            </div>
        )
    }


};
export default Dashboard;

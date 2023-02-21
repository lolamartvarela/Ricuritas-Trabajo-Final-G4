//
import React, {useState} from "react";
import {BsFillTrashFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import BorrarMenu from "../component/borrarMenu.jsx";
import DefaultAdminDashboard from "../component/defaultAdminDashboard.jsx";
import MenuCreator from "../component/menu-creator";
import Pedidos from "../component/pedidos.jsx";

const AdminDashboard = () => {
    const [showPage, setShowPage] = useState(0)

    const handleButtonClick = (pageNumber) => {
        setShowPage(pageNumber);
    };

    return (

        <div className="row divHeight mt-5">
            <div className="d-flex">
                <div className="col-lg-2 col-md-3 col-sm-4 col-4 bg-secondary pt-5">
                    <div className="mb-3 ps-3">
                        <button type="button" className="btn btn-outline-light buttonAdminWidth btn-sm btn-block"
                            onClick={
                                () => handleButtonClick(1)
                        }>
                            Pedidos
                        </button>
                    </div>
                    <div className="mb-3 ps-3">
                        <button type="button" className="btn btn-outline-light buttonAdminWidth btn-sm btn-block"
                            onClick={
                                () => handleButtonClick(2)
                        }>
                            Crear Menú
                        </button>
                    </div>
                    <div className="ps-3">
                        <button type="button" className="btn btn-outline-light buttonAdminWidth btn-sm btn-block"
                            onClick={
                                () => handleButtonClick(3)
                        }>
                            Eliminar Menú
                        </button>
                    </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-8 col-8 ms-5">
                    {
                    showPage === 0 && <DefaultAdminDashboard/>
                }
                    {
                    showPage === 1 && <Pedidos/>
                }
                    {
                    showPage === 2 && <MenuCreator/>
                }
                    {
                    showPage === 3 && <BorrarMenu/>
                } </div>
            </div>
        </div>


    );
};

export default AdminDashboard;

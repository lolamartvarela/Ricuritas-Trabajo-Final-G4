//
import React, {useState} from "react";
import {BsFillTrashFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import MenuCreator from "../component/menu-creator";

const AdminDashboard = () => {
    const [showPage, setShowPage] = useState(0)

    const handleButtonClick = (pageNumber) => {
        setShowPage(pageNumber);
    };

    return (

        <div className="row divHeight mt-5">
            <div className="d-flex">
                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 bg-secondary pt-5">
                    <div className="mb-3 ms-3">
                        <button type="button" class="btn btn-outline-light buttonAdminWidth"
                            onClick={
                                () => handleButtonClick(1)
                        }>Pedidos</button>
                    </div>
                    <div className="mb-3 ms-3">
                        <button type="button" class="btn btn-outline-light buttonAdminWidth"
                            onClick={
                                () => handleButtonClick(2)
                        }>Crear Menú</button>
                    </div>
                    <div className="ms-3">
                        <button type="button" class="btn btn-outline-light buttonAdminWidth"
                            onClick={
                                () => handleButtonClick(3)
                        }>Eliminar Menú</button>
                    </div>

                </div>
                <div className="col-lg-10 col-md-9 col-sm-6 col-xs-12 ms-5">

                    {
                    showPage === 0 && <div>
                        <h1>Pulse cualquier botón para mostrar algo</h1>
                    </div>
                }
                    {
                    showPage === 1 && <h1>Acá irá algo próximamente</h1>
                }
                    {
                    showPage === 2 && <MenuCreator/>
                }
                    {
                    showPage === 3 && <div>
                        <h1>Soy la página 3</h1>
                    </div>
                } </div>
            </div>
        </div>


    );
};

export default AdminDashboard;

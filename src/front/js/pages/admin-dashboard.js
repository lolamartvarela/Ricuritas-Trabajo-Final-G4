import React from "react";
import {BsFillTrashFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const AdminDashboard = () => {

    const handleSomething = () => {
        console.log("Yo debería borrar algo")
    }
    return (
        <>
            <div className="container mt-5 text-center">
                <h1>Dashboard de Administrador</h1>
            </div>
            <div className="container d-flex divHeight mt-5">

                {/* Aquí va el primer bloque que es el acordeón con los pedidos */}
                <div className="col-6 me-2">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {/* Aquí comienza el primer elemento del acordeón */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    Pedido #1
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h4>Menú: Martes</h4>
                                    <p>Tipo: Vegetariano</p>
                                    <p>Cliente: Ilana Bergson</p>
                                    <p>Pago</p>


                                </div>
                            </div>
                        </div>
                        {/* Aquí termina el primer elemento del acordeón */}

                        {/* Aquí comienza el segundo elemento del acordeón */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                    Pedido #2
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h4>Menú: Miércoles</h4>
                                    <p>Tipo: Común</p>
                                    <p>Cliente: David Rabinovich</p>
                                    <p>Pago</p>
                                </div>
                            </div>
                        </div>
                        {/* Aquí termina el segundo elemento del acordeón */}

                        {/* Aquí comienza el segundo elemento del acordeón */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                    Pedido #3
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h4>Menú: Viernes</h4>
                                    <p>Tipo: Vegetariano</p>
                                    <p>Cliente: Tamar Levi</p>
                                    <p>Pago</p>
                                </div>
                            </div>
                        </div>
                        {/* Aquí termina el segundo elemento del acordeón */} </div>

                </div>

                {/* Esta es la segunda parte del Dashboard de Administrador, Aquí se realiza el CRUD */}
                <div className="col-6 ms-2">
                    <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Crear Menú</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Modificar Menú</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Quitar Menú</button>

                        </div>
                        <div className="tab-content" id="v-pills-tabContent">

                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <div>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Día</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Descripción</label>
                                            <input type="text" className="form-control" id="Descripción" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Precio</label>
                                            <input type="text" className="form-control" id="Precio" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Tipo</label>
                                            <input type="password" className="form-control" id="Tipo"/>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Listo</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Crear Menú</button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menús Disponibles
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">Menú-V-: Lunes</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Menú-C-: Jueves</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Menú-V-: Viernes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                <div className="mb-2 d-flex align-items-center bg-warning border border-dark rounded-3" role="alert">
                                    <div className="col-10">
                                        <h6 className="px-3 mt-1 mb-1">Menú-CS-: Lunes</h6>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end">
                                        <BsFillTrashFill className="mt-1 mb-1 me-3 btn-outline-info"
                                            onClick={handleSomething}/>
                                    </div>
                                </div>

                                <div className="mb-2 d-flex align-items-center bg-warning border border-dark rounded-3" role="alert">
                                    <div className="col-10">
                                        <h6 className="px-3 mt-1 mb-1">Menú-C-: Martes</h6>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end">
                                        <BsFillTrashFill className="mt-1 mb-1 me-3 btn-outline-info"
                                            onClick={handleSomething}/>
                                    </div>
                                </div>

                                <div className="mb-2 d-flex align-items-center bg-warning border border-dark rounded-3" role="alert">
                                    <div className="col-10">
                                        <h6 className="px-3 mt-1 mb-1">Menú-V-: Miércoles</h6>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end">

                                        <BsFillTrashFill className="mt-1 mb-1 me-3 btn-outline-info"
                                            onClick={handleSomething}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;

import React from "react";
import swal from "sweetalert";
import axios, {isCancel, AxiosError} from "axios";

const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            message: null,
            auth: false,
            isAdmin: false,
            cadaMenu: [],
            carrito: []
        },

        actions: {
            // ? Esta función le permite al admin borrar menús
            borrarMenu: async (menu_id) => {
                const store = getStore();
                await axios.delete(`https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/${menu_id}`).then((resp) => {
                    if (resp.status === 200) {
                        const nuevosMenus = store.cadaMenu.filter((menu) => menu.id !== menu_id);
                        setStore({cadaMenu: nuevosMenus});
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },

            // ? Esta función borra todos los elementos de adentro del carrito de compras
            clearCart: () => {
                const store = getStore();
                setStore({
                    ... store,
                    carrito: []
                });
            },

            // ? Esta función permite enviar cada orden de compras a la base de datos
            guardarInformacion: (items, totalPrice, username) => {
                axios.post("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/compras/", {
                    items: items,
                    totalPrice: totalPrice,
                    username: username
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            },

            // ? Esta función permite obtener todas las órdenes desde la base de datos
            obtenerCompras: async () => {
                try {
                    const response = await axios.get("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/compras/");
                    return response.data;
                } catch (error) {
                    console.log(error);
                }
            },

            // ? Esta función permite borrar de una orden por su id
            borrarCompra: async (id) => {
                try {
                    const response = await axios.delete(`https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/compras/${id}`);
                    return response.data;
                } catch (error) {
                    console.log(error);
                }
            },

            // ? Esta función agrega de a un menú al carrito de compras
            agregarAlCarrito: (menu) => {
                const store = getStore();
                setStore({
                    carrito: [
                        ... store.carrito,
                        menu
                    ]
                });
            },

            // ? Esta función elimina menús del carrito de compras
            eliminarDelCarrito: (index) => {
                const store = getStore();
                const newCarrito = [... store.carrito];
                newCarrito.splice(index, 1);
                setStore({carrito: newCarrito});
            },

            // ? POR FAVOR NO BORRAR: Nos ayuda a recuperar la contraseña
            recoverMail: async (email) => {
                try {
                    const response = await axios.post("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/forgotpassword", {email: email});
                    return response;
                } catch (error) {
                    console.log(error);
                    return error.response;
                }
            },

            // ? Fetch para crear la review
            createReview: async (username, puntos, comentario) => {
                try {
                    const response = await axios.post(`https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/reviews/`, {
                        username: username,
                        puntos: puntos,
                        comentario: comentario
                    });
                    console.log(response.data);
                    return response.data;
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            },

            // ? Esta función crea los menues en la base de datos
            createMenu: async (tipoMenu, nombreMenu, descriptionMenu, precioMenu, imageUrl) => {
                try {
                    const response = await axios.post("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/", {
                        tipo_menu: tipoMenu,
                        title: nombreMenu,
                        description: descriptionMenu,
                        price: precioMenu,
                        url: imageUrl
                    });
                    console.log(response.status);
                    if (response.status === 200) {
                        console.log("Menú creado con éxito");
                    }
                } catch (error) {
                    console.log(error);
                    swal("Algo salió mal", "El menú no pudo ser creado");
                }
            },

            // ? Esta función obtiene todos los menues del backend
            getMenu: async () => {
                await axios.get("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/").then((resp) => {
                    setStore({cadaMenu: resp.data});
                });
            },

            // ? Esta función compara el token del usuario actual con el token válido en el JWT del backend
            getUserRole: async () => {
                try {
                    const token = localStorage.getItem("token");
                    if (! token) {
                        setStore({auth: false, isAdmin: false, userType: 0});
                        return;
                    }

                    const headers = {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    };

                    const response = await Promise.all([
                        fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/get-user-role", {
                            method: "GET",
                            headers: headers
                        }),
                    ]);

                    const [res] = response;
                    if (res.status === 201) {
                        setStore({auth: true, isAdmin: true, userType: 2});
                    } else if (res.status === 200) {
                        const data = await res.json();
                        setStore({
                            auth: true,
                            isAdmin: data.role === "admin",
                            userType: 1
                        });
                    } else {
                        setStore({auth: false, isAdmin: false, userType: 0});
                    }
                } catch (error) {
                    console.error(error);
                }
            },

            // ? Acá empieza el fetch que nos permite conectar con el BackEnd
            login: (userEmail, userPassword) => {
                fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {email: userEmail, password: userPassword}
                    )
                }).then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        setStore({auth: true});
                    } else if (response.status === 401) {
                        swal({
                            title: "Algo ha salido mal!",
                            text: "Debe ingresar un password y/o contraseña correctos.",
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

                    return response.json();
                }).then((data) => {
                    localStorage.setItem("token", data.access_token);
                    localStorage.setItem("username", data.user);
                }).catch((err) => {
                    console.log(err);
                    swal({
                        title: "Algo ha salido mal!",
                        text: "Hemos tenido un problema de conexión y no ha sido posible loguearse.",
                        icon: "error",
                        buttons: {
                            cerrar: {
                                text: "Cerrar",
                                className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                            }
                        },
                        buttonsStyling: false
                    });
                });
            },

            logout: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("idDinamica");

                setStore({auth: false});
            },

            // ? Acá termina el fetch que nos permite conectar con el BackEnd

            // Acá está la función de crear un nuevo usuario
            register: (userEmail, userName, userNombre, userApellido, userPassword) => {
                fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/user/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            email: userEmail,
                            user_name: userName,
                            nombre: userNombre,
                            apellido: userApellido,
                            password: userPassword
                        }
                    )
                }).then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        setStore({auth: true});
                    }
                    return response.json();
                }).catch((err) => swal({
                    title: "Algo ha salido mal!",
                    text: "No se ha podido crear un nuevo usuario, vuelva a intentarlo más tarde",
                    icon: "error",
                    buttons: {
                        cerrar: {
                            text: "Cerrar",
                            className: "btn bgbuttonverde text-white rounded-pill mx-2 mt-2"
                        }
                    },
                    buttonsStyling: false
                }));
            },

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try { // fetching data from the backend
                    const resp = await fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/hello");
                    const data = await resp.json();
                    setStore({message: data.message});
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => { // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) 
                        elm.background = color;
                    

                    return elm;
                });

                // reset the global store
                setStore({demo: demo});
            }
        }
    };
};

export default getState;

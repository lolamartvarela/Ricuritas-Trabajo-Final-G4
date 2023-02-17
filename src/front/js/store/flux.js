import React from "react";
import swal from "sweetalert";
import axios, {
    isCancel,
    AxiosError
} from "axios";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            auth: false,
            isAdmin: false,
            cadaMenu: [],
            carrito: [],
        },

        actions: {

            // ? Esta función le permite al admin borrar menús

            borrarMenu: async (menu_id) => {
                const store = getStore();
                await axios
                    .delete(`https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/${menu_id}`)
                    .then((resp) => {
                        if (resp.status === 200) {
                            const nuevosMenus = store.cadaMenu.filter((menu) => menu.id !== menu_id);
                            setStore({
                                cadaMenu: nuevosMenus
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },


            // ? Esta función agrega de a un menú al carrito de compras
            agregarAlCarrito: (menu) => {
                const store = getStore();
                setStore({
<<<<<<< HEAD
                    carrito: [
                        ...store.carrito,
                        menu
                    ]
=======
                    carrito: [...store.carrito, menu],
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                });
            },

            // ? Esta función elimina menús del carrito de compras
            eliminarDelCarrito: (index) => {
                const store = getStore();
                const newCarrito = [...store.carrito];
                newCarrito.splice(index, 1);
                setStore({
<<<<<<< HEAD
                    carrito: newCarrito
=======
                    carrito: newCarrito,
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                });
            },

            // ? POR FAVOR NO BORRAR: Nos ayuda a recuperar la contraseña
            recoverMail: async (email) => {
<<<<<<< HEAD
                axios.post("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/forgotpassword", {
                    email: email
                }).then(res => console.log(res.data)).catch(err => console.log(err));
=======
                axios
                    .post(
                        "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/forgotpassword", {
                            email: email,
                        }
                    )
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err));
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
            },

            // ? Esta función crea los menues en la base de datos
            createMenu: async (
                tipoMenu,
                nombreMenu,
                descriptionMenu,
                precioMenu,
                imageUrl
            ) => {
                try {
                    const response = await axios.post(
                        "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/", {
                            tipo_menu: tipoMenu,
                            title: nombreMenu,
                            description: descriptionMenu,
                            price: precioMenu,
                            url: imageUrl,
                        }
                    );
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
<<<<<<< HEAD
                await axios.get("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/").then((resp) => {
                    setStore({
                        cadaMenu: resp.data
                    });
                });
=======
                await axios
                    .get(
                        "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/menues/"
                    )
                    .then((resp) => {
                        setStore({
                            cadaMenu: resp.data,
                        });
                    });
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
            },

            // ? Esta función compara el token del usuario actual con el token válido en el JWT del backend
            getUserRole: async () => {
                try {
                    const token = localStorage.getItem("token");
                    if (!token) {
                        setStore({
                            auth: false,
                            isAdmin: false,
<<<<<<< HEAD
                            userType: 0
=======
                            userType: 0,
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                        });
                        return;
                    }

                    const headers = {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    };

                    const response = await Promise.all([
                        fetch(
                            "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/get-user-role", {
                                method: "GET",
                                headers: headers,
                            }
                        ),
                    ]);

                    const [res] = response;
                    if (res.status === 201) {
                        setStore({
                            auth: true,
                            isAdmin: true,
<<<<<<< HEAD
                            userType: 2
=======
                            userType: 2,
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                        });
                    } else if (res.status === 200) {
                        const data = await res.json();
                        setStore({
                            auth: true,
                            isAdmin: data.role === "admin",
                            userType: 1,
                        });
                    } else {
                        setStore({
                            auth: false,
                            isAdmin: false,
<<<<<<< HEAD
                            userType: 0
=======
                            userType: 0,
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                        });
                    }
                } catch (error) {
                    console.error(error);
                }
            },

            // ? Acá empieza el fetch que nos permite conectar con el BackEnd
            login: (userEmail, userPassword) => {
<<<<<<< HEAD
                fetch("https://3001-lolamartvar-ricuritastr-42c56mnz3pf.ws-us87.gitpod.io/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        password: userPassword
                    })
                }).then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        setStore({
                            auth: true
                        });
                    }
=======
                fetch(
                        "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: userEmail,
                                password: userPassword,
                            }),
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                            });
                        }
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408

                        return response.json();
                    })
                    .then((data) => {
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => {
                        console.log(err);
                        swal("Algo salió mal", "Su password o su email son incorrectos");
                    });
            },

            logout: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("admin");
                setStore({
<<<<<<< HEAD
                    auth: false
=======
                    auth: false,
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                });
            },

            // ? Acá termina el fetch que nos permite conectar con el BackEnd

            // Acá está la función de crear un nuevo usuario
<<<<<<< HEAD
            register: (userEmail, userName, userNombre, userApellido, userPassword) => {
                fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/admin/user/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        user_name: userName,
                        nombre: userNombre,
                        apellido: userApellido,
                        password: userPassword
                    })
                }).then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        setStore({
                            auth: true
                        });
                    }
                    return response.json();
                }).catch((err) => swal("Algo salió mal", "No se ha podido crear un nuevo usuario, intentelo de nuevo"));
=======
            register: (
                userEmail,
                userName,
                userNombre,
                userApellido,
                userPassword
            ) => {
                fetch(
                        "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/admin/user/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: userEmail,
                                user_name: userName,
                                nombre: userNombre,
                                apellido: userApellido,
                                password: userPassword,
                            }),
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                            });
                        }
                        return response.json();
                    })
                    .catch((err) =>
                        swal(
                            "Algo salió mal",
                            "No se ha podido crear un nuevo usuario, intentelo de nuevo"
                        )
                    );
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
            },

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        "https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/hello"
                    );
                    const data = await resp.json();
                    setStore({
<<<<<<< HEAD
                        message: data.message
=======
                        message: data.message,
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => {
                // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
<<<<<<< HEAD
                    if (i === index)
                        elm.background = color;


=======
                    if (i === index) elm.background = color;
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408

                    return elm;
                });

                // reset the global store
                setStore({
<<<<<<< HEAD
                    demo: demo
                });
            }
        }
=======
                    demo: demo,
                });
            },
        },
>>>>>>> d5f8d39f04922809183489c304ec0f3cd024a408
    };
};

export default getState;
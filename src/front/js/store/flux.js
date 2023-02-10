//
import React from "react";
import swal from 'sweetalert'

const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            message: null,
            auth: false,
            isAdmin: false
        },

        actions: {


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

                    const response = await Promise.all([fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us86.gitpod.io/api/get-user-role", {
                            method: "GET",
                            headers: headers
                        })]);

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
                fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us86.gitpod.io/api/login", {
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
                    }

                    return response.json();
                }).then((data) => {
                    localStorage.setItem("token", data.access_token);
                }).catch((err) => {
                    console.log(err);
                    swal("Algo salió mal", "Su password o su email son incorrectos");

                });
            },

            logout: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("admin");
                setStore({auth: false});
            },

            // ? Acá termina el fetch que nos permite conectar con el BackEnd

            // Acá está la función de crear un nuevo usuario
            register: (userEmail, userName, userNombre, userApellido, userPassword) => {
                fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us86.gitpod.io/api/user", {
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
                }).catch((err) => swal("Algo salió mal", "No se ha podido crear un nuevo usuario, intentelo de nuevo"));
            },

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try { // fetching data from the backend
                    const resp = await fetch("https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us86.gitpod.io/api/hello");
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

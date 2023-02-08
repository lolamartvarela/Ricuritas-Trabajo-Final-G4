import React, {useState} from 'react';
const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            message: null,
            auth: false,
            numero: 0,
            accessToken: false,

            // MENU Y MENU VEGANO

            // menu: [],
            // menuVegano: [],
            // infoCadaMenu: {},
            // infoCadaMenuVegano: {}

        },

        actions: {

            // FETCH PARA MENU Y MENU VEGANO
            // obtenerMenu: () => {
            //     fetch("url").then(resp => resp.json()).then(data => setStore({menu: data.results})).catch(err => console.log(err))
            // },


            // obtenerMenuVegano: () => {
            //     fetch("url").then(resp => resp.json()).then(data => setStore({menu: data.results})).catch(err => console.log(err))
            // },

            // infoCadaMenu: () => {
            //     fetch("url").then(res => res.json()).then(data => setStore({menu: data.results})).catch(err => console.error(err))
            // },

            // infoCadaMenuVegano: () => {
            //     fetch("https://swapi.dev/api/people/").then(res => res.json()).then(data => setStore({menuVegano: data.results})).catch(err => console.error(err))
            // },


            // ? Esta función cambia el estado del auth
            valid_token: () => {
                const token = localStorage.getItem('token');
                if (token === null) {
                    setStore({auth: false})
                } else {
                    setStore({auth: true})
                }
            },

            // ? Acá empieza el fetch que nos permite conectar con el BackEnd
            login: (userEmail, userPassword) => {
                fetch('https://3001-lolamartvar-ricuritastr-pvbzkm387ea.ws-us85.gitpod.io/api/login', {
                    method: 'POST',
                    // mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Access-Control-Allow-Origin': '*'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(
                        {"email": userEmail, "password": userPassword}
                    ) // body data type must match "Content-Type" header
                }).then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        setStore({auth: true})
                    }

                    return response.json()
                }).then((data) => {
                    const adminData = data.is_admin;
                    localStorage.setItem('token', data.access_token)
                    if (adminData === true) {
                        localStorage.setItem('admin', "34åÇkJhdkKhdf0'=)(675684fsg45sg744fs65g468sf4gJVvghhjksdfg8?=)(/$%32&ujsfdgjuibdgijk")
                    }

                }).catch((err) => {
                    console.log(err);
                    alert("algo salió mal")
                })
            },

            // ? Acá termina el fetch que nos permite conectar con el BackEnd


            // Acá está la función de crear un nuevo usuario
            register: (userEmail, userName, userNombre, userApellido, userPassword) => {
                fetch('https://3001-lolamartvar-ricuritastr-pvbzkm387ea.ws-us85.gitpod.io/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "email": userEmail,
                            "user_name": userName,
                            "nombre": userNombre,
                            "apellido": userApellido,
                            "password": userPassword
                        }
                    )
                }).then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        setStore({auth: true})
                    }
                    return response.json()
                }).catch((err) => console.log(err))
            },


            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try { // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
                    const data = await resp.json()
                    setStore({message: data.message})
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error)
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

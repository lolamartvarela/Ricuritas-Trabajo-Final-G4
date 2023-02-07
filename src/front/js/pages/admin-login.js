import React, {useState} from 'react';

const Admin_Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        fetch('https://3001-lolamartvar-ricuritastr-pvbzkm387ea.ws-us85.gitpod.io/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {username: username, password: password}
            )
        }).then(res => res.json()).then(data => {
            if (data.role === 'admin') {
                setLoggedIn(true);
            } else {
                setError('Usuario no autorizado');
            }
        }).catch(err => {
            setError('Ocurrió un error al iniciar sesión');
            console.error(err);
        });
    };

    if (loggedIn) {
        window.location.href = '/admin-dashboard';
        return null;
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default Admin_Login;

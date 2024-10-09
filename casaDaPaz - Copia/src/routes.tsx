import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Produto from './pages/Produto';
import PageExampleState from './pages/PageExampleState';
import Usuarios from './pages/Usuarios';
import GerenciarUsuarios from './pages/Usuarios/Gerenciar';
import Voluntarios from './pages/Voluntarios';

export const Rotas = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica se o usuário está autenticado
        const token = localStorage.getItem('americanos.token');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />

                <Route
                    path='/dashboard'
                    element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
                />

                <Route
                    path='/usuarios'
                    element={isAuthenticated ? <Usuarios /> : <Navigate to="/" />}
                />

                <Route
                    path='voluntarios'
                    element={isAuthenticated ? <Voluntarios /> : <Navigate to="/" />}

                />

                <Route
                    path='/usuarios/:id'
                    element={isAuthenticated ? <GerenciarUsuarios /> : <Navigate to="/" />}
                />

                <Route
                    path='/produto/:id'
                    element={isAuthenticated ? <Produto /> : <Navigate to="/" />}
                />

                <Route
                    path='/example'
                    element={isAuthenticated ? <PageExampleState /> : <Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
    );
};
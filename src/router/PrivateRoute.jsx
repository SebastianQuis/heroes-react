import React, { useContext, useMemo } from 'react'
import { AuthContext } from '../auth/context/authContext'
import { Navigate, useLocation } from 'react-router-dom'


const useMemoLastPath = () => {
    const {pathname} = useLocation();
    localStorage.setItem( 'lastPath', pathname );
}



export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)
    
    const lastPath = localStorage.getItem('lastPath');
    useMemo( () => useMemoLastPath(), [lastPath] )
    
    // const {pathname} = useLocation();
    // localStorage.setItem( 'lastPath', pathname );
    // console.log('re-render');

    return (logged)
        ? children // SI ESTA LOGEADO, MUESTRA TODO LAS RUTAS, MENOS LOGIN
        : <Navigate to={'/login'}/> // NO ESTA LOGEADO, NAVEGA LOGIN DIRECTO
}

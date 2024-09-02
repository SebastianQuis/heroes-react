
/**
 * CHILDREN ES TODAS LAS PANTALLAS QUE SE VA A TENER ACCESO DESDE EL CONTEXT.
 */


import React, { useReducer } from 'react'
import { authReducer } from './authReducer'
import { AuthContext } from './authContext';
import { types } from '../types/types';


// const initState = {
//     logged: false
// }


// todo - funcion para inicializar estado de la aplicación, regresar un estado
const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );
    return {
        logged: !!user, // SI HAY USER: TRUE, SI NO HAY: FALSE
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    
    const [ authState, dispatch ] = useReducer( authReducer, {}, init )

    // TODO - LOGIN 
    const login = (name = '') => {
        // definir la acción y disparar
        const user = {id: 'ABC', name: name}; // online:true
        const action = { type: types.login, payload: user }
        
        // POST dato inicial en storage
        localStorage.setItem( 'user', JSON.stringify( user )) // SAVE IN LOCAL STORAGE

        dispatch( action ); // DISPARAR LA ACCIÓN
    }

    // TODO - LOGOUT
    const logout = () => {
        // DELETE dato inicial en storage
        localStorage.removeItem('user'); // REMUEVE SOLO LO NECESARIO!!
        
        // definir la acción y disparar
        const action = { type: types.logout }
        dispatch(action)
    }

    return (
        <AuthContext.Provider 
            value={{
                ...authState,
                
                // methods
                login: login,
                logout: logout
            }}>
            {children} 
        </AuthContext.Provider>
    )
}

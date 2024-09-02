

/**
 * 
 * EL STATE QUE REGRESA VA A DEPENDER A QUE PANTALLA SE REDIRIGE EL MISMO
 */

import { types } from "../types/types";

// const initState = {
//     logged: false
// }

export const authReducer = ( state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
            
        case types.logout:
            return {
                logged: false,
            }    
            
        default:
            state;
    }
}
import { useReducer } from "react";

// TODO - PRUEBA

//
const init = () => {
    // deberia ser una lista de productos
    const product = {
        id: 0,
        name: 'product 1',
        price: '10.00',
        year: 2022
    };

    return {
        rspt: true,
        product: product // deberia ser: listProducts
    }
}


export const HeroesProvider = ({children}) => {

    const [state, dispatch] = useReducer(first, second, third)

    // PETICIONES HTTP
    // GET - POST - PUT

}



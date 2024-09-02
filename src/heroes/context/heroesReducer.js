

const initState = {
    rspta: true,
    body: [
        {
            id: 0,
            name: 'product 1',
            price: '10.00',
            year: 2022
        }
    ]
}


const types = {
    heroes: '[Heroes] heroes',
    heroe: '[Heroes] heroe'
}

export const heroesReducer = ( state = initState, action ) => {

    switch (action.type) {
        case types.heroe:
            return {
                ...state,
                body: action.payload
            }
        case types.heroe:
            return {
                ...state,
                product: action.payload
            }
        default:
            state;
    }

     

}


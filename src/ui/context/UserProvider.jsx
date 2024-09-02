
import { userContext } from './UserContext'

export const UserProvider = ( {children} ) => {
    return (
        <userContext.Provider value={ {} }>
            {children}
        </userContext.Provider>
    )
}



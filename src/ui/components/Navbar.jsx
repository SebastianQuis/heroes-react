import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/authContext';


export const Navbar = () => {
    // lo que devuelve: authprovider & authcontext
    const { user, logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
        logout()
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) =>  `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`  }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`  }
                        to="/search"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>

                    <button 
                        className='nav-item nav-link btn border-secondary'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>

        </nav>
    )
}
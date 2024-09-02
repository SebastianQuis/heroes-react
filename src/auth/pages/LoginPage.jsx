import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const { login } = useContext( AuthContext );
  

  const lastPath = localStorage.getItem('lastPath') || '/';
  
  // useMemo(() => {
  //   const lastPath = localStorage.getItem('lastPath') || '/';
  // }, [lastPath])


  const onLogin = () => {
    login( 'Sebastian Gonz' );
    navigate( lastPath, { replace: true });
  }
  
  return (
    <div className='container mt-3'>
      <h1>LoginPage</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={ onLogin }
      >
        Ir al home
      </button>
      
    </div>

  )
}

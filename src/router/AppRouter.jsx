
import { Route, Routes, useLocation } from 'react-router-dom'


import { HeroesRoute } from '../heroes'
import { LoginPage } from '../auth/pages'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  return (
    <>
      <Routes>

      <Route path='/login/*' element= {
          <PublicRoute>
            {/* <LoginPage/> */}
            <Routes>
              <Route path='/*' element={ <LoginPage/> }/>    

              {/* TODO -  REGISTERPAGE -  */}
              {/* <Route path='/*' element={ <LoginPage/> }/>         */}
            </Routes>
          </PublicRoute>
        }/>

        {/* <Route path='login' element={ <LoginPage/> }/>              */}

        
        <Route path='/*' element= {
          <PrivateRoute>
            <HeroesRoute/>
          </PrivateRoute>
        }/>

        {/* <Route path='/*' element={ <HeroesRoute/> }/> */}

      </Routes>
    </>
  )
}

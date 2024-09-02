import React from 'react'
import { ListHeroes } from '../components'

export const DcPage = () => {
  
  return (
    <div className='container'>

      <h1>DC Page</h1>
      <hr />

      <ListHeroes  publisher={ 'DC Comics' }  />
      
    </div>
    
  )
}

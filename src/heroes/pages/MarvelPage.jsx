import React from 'react'
import { ListHeroes } from '../components'

export const MarvelPage = () => {
  return (
    <div className='container'>

      <h1>Marvel Page</h1>
      <hr />

      <ListHeroes  publisher={ 'Marvel Comics' }  />
      
    </div>
  )
}

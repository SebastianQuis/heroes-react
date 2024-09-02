import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../hooks/useForm'
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse( location.search );
  const foundHeroes = getHeroesByName(q);

  const showSearch      = ( q.length <= 1 );
  const showErrorSearch = ( q.length > 1 && foundHeroes.length === 0 );

  
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1 ) return;
    
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Encuentra un personaje</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <h3>Buscando..</h3>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Personaje" 
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button
              className='btn btn-outline-primary mt-2'
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h3>Resultado</h3>
          <hr />

          <div
            className='alert alert-info animate__animated animate__zoomIn'
            style={ {display: showSearch ? '' : 'none'} }
            >
            Busca un heroe
          </div>

          <div
            className='alert alert-danger animate__animated animate__zoomIn'
            style={ {display: showErrorSearch ? '' : 'none'} }
          >
            No existe el heroe {q}
          </div>
          
          {
            foundHeroes.map(hero => 
              ( <HeroCard key={hero.id} {...hero}/> )
            )
          }

        </div>
      </div>

      

    </>
  )
}

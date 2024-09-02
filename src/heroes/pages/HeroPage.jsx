import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
import { CharactersByHero } from '../components/CharactersByHero';
import { useMemo } from 'react';


export const HeroPage = () => {
  const { id } = useParams();
  // USEMEMO - MANTENER EL VALOR DE UN PETICION HTTP EN MEMORIA
  const getHero = useMemo(() => getHeroById( id ), [id] );
  
  const navigate = useNavigate();
  const onReturnPage = () => {
    navigate(-1); // RETORNA PAGINA ANTERIOR
  }

  if (!getHero) { // SI NO REGRESA UN HEROE
    return <Navigate to={ '/' } />
  }

  const { superhero, alter_ego, first_appearance, characters } = getHero;
  const imgUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <>    
      <h1>Heroe</h1>
      <hr />

      <div className="card shadow-sm w-25 rounded-3 mt-4 animate__animated animate__zoomIn">
          <div className="d-flex justify-content-center">
            <img src={imgUrl} className="img-fluid rounded-top" alt={id} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold text-center">{superhero}</h5>
            <p className="card-subtitle mb-3 text-center text-muted">{alter_ego}</p>

            <CharactersByHero alter_ego={alter_ego} characters={characters} />

            <div className="mt-auto">
              <small className="text-muted d-block text-center mb-3">{first_appearance}</small>
              <button
                onClick={ onReturnPage }
                className="btn btn-danger btn-block w-100"
              >
                Regresar
              </button>
            </div>
          </div>
      </div>
    </>
  )
}
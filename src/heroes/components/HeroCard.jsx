
import React from 'react'
import { Link } from 'react-router-dom';
import { CharactersByHero } from './CharactersByHero';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    
    let imgUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="card shadow-sm rounded-3 overflow-hidden animate__animated animate__zoomIn">
            <img src={imgUrl} className="card-img-top" alt={id} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center">{superhero}</h5>
                <p className="card-subtitle mb-3 text-center text-muted">{alter_ego}</p>
    
                <CharactersByHero alter_ego={alter_ego} characters={characters} />
    
                <div className="mt-auto">
                    <small className="text-muted d-block text-center mb-3">{first_appearance}</small>
                    <Link
                        to={`/hero/${id}`}
                        className="btn btn-primary btn-block w-100"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )

}


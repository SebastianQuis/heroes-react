import React from 'react'

export const CharactersByHero = ( { alter_ego, characters } ) => {
    if (alter_ego === characters) return (<p className="card-text">Sin characters</p>)
    return <p className="card-text">{ characters }</p>
}
    

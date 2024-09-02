import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';


export const ListHeroes = ({ publisher }) => {
    
    // USEMEMO - si no cambia la dependencia publisher, el componente no se renderiza otra vez
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher] );
    
    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInLeft'>
            {
                heroes.map( (heroe) => (
                    <HeroCard
                        key={ heroe.id }
                        { ...heroe }
                    />
                ))
            }
        </div>
    );
}

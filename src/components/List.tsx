import { useGetAllPokemonQuery } from '../services/api';
import type { PokemonLink } from '../types/PokemonLink.type';
import PokemonListItem from './PokemonListItem';

import '../styles/List.css';
import '../styles/Hero.css';

function List() {
    const { data, error, isLoading } = useGetAllPokemonQuery();

    return (
        error ? <>Oh no, there was an error</> : isLoading ? <>Loading...</> :
            <><div className="hero"><b>PokeBook:</b> explore the world of pocket monsters</div>
                <ul>
                    {data?.results.map((pokemonLink: PokemonLink) => <PokemonListItem {...pokemonLink} key={pokemonLink.name} />)}
                </ul></>
    )
}

export default List;
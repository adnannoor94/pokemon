import { useGetAllPokemonQuery } from '../services/api';
import type { PokemonLink } from '../types/PokemonLink.type';
import PokemonListItem from './PokemonListItem';
import Loading from './Loading';
import Error from './Error';

import '../styles/List.css';
import '../styles/Hero.css';

function List() {
    const { data, error, isLoading } = useGetAllPokemonQuery();

    return (
        <>
            <div className="hero"><b>PokeBook:</b> explore the world of pocket monsters</div >
            {
                error ? <Error /> : isLoading ? <Loading /> :
                    <ul>
                        {data?.map((pokemonLink: PokemonLink) => <PokemonListItem {...pokemonLink} key={pokemonLink.id} />)}
                    </ul>
            }
        </>
    )
}

export default List;
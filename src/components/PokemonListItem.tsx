import type { PokemonLink } from '../types/PokemonLink.type';
import pokeballImage from '../assets/pokeball.png';
import { useDispatch } from 'react-redux';
import { setCurrentPokemon } from '../state/Slices/PokemonSlice';

const PokemonListItem: React.FC<PokemonLink> = ({ id, name }: PokemonLink) => {

    const dispatch = useDispatch();

    return <li onClick={() => dispatch(setCurrentPokemon(id))}>
        <span>{name}</span>
        <img src={pokeballImage} alt="Pokeball" width="36" height="36" />
    </li>
}

export default PokemonListItem;
import type { PokemonLink } from '../types/PokemonLink.type';
import pokeballImage from '../assets/pokeball.png';

const PokemonListItem: React.FC<PokemonLink> = ({ name, url }: PokemonLink) => {
    return <li>
        <span>{name}</span>
        <img src={pokeballImage} alt="Pokeball" width="36" height="36" />
    </li>
}

export default PokemonListItem;
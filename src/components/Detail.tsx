import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { setCurrentPokemon } from '../state/Slices/PokemonSlice';
import { useGetPokemonByIdQuery } from '../services/api';
import Loading from './Loading';
import Error from './Error';

import '../styles/Detail.css';
import '../styles/Hero.css';

function Detail() {
    const pokemonId = useSelector((state: RootState) => state.pokemon.currentPokemonId);
    const { data, error, isLoading } = useGetPokemonByIdQuery(pokemonId);
    const typesArray = data?.types?.map(obj => obj.type?.name);
    const dispatch = useDispatch();

    return (
        <>
            <div className="hero" onClick={() => dispatch(setCurrentPokemon(0))}>
                <i className="arrow"></i>
                <b>PokeBook:</b> explore the world of pocket monsters
            </div>
            {
                error ? <Error /> : isLoading ? <Loading /> :
                    <div className="card">
                        <img src={data?.sprites?.front_default} alt={data?.name} width="120" height="120" />
                        <ul className="details">
                            <li>
                                <label>Name:</label>
                                <span>{data?.name}</span>
                            </li>
                            <li>
                                <label>Height:</label>
                                <span>{data?.height}</span>
                            </li>
                            <li>
                                <label>Weight:</label>
                                <span>{data?.weight}</span>
                            </li>
                            <li>
                                <label>Types:</label>
                                <span>{typesArray?.join(', ')}</span>
                            </li>
                        </ul>
                    </div >
            }
        </>
    )
}

export default Detail;
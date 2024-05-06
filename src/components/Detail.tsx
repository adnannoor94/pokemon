import { useGetPokemonByIdQuery } from '../services/api';

import '../styles/Detail.css';
import '../styles/Hero.css';

function Detail() {
    const { data, error, isLoading } = useGetPokemonByIdQuery(2);
    const typesArray = data?.types?.map(obj => obj.type?.name);

    return (
        error ? <>Oh no, there was an error</> : isLoading ? <>Loading...</> :
            <>
                <div className="hero">
                    <i className="arrow"></i>
                    <b>PokeBook:</b> explore the world of pocket monsters
                </div>
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
            </>

    )
}

export default Detail;
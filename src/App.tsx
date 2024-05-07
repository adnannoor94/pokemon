import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import Detail from './components/Detail';
import List from './components/List';

import './styles/App.css';

function App() {
  const pokemonId = useSelector((state: RootState) => state.pokemon.currentPokemonId);

  return (
    <div className="App">
      {pokemonId > 0 ?
        <Detail />
        : <List />}
    </div>
  );
}

export default App;

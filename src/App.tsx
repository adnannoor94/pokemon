import Detail from './components/Detail';
import List from './components/List';
import { useState } from 'react';

import './styles/App.css';

function App() {

  const [pokemonRequested, setPokemonRequested] = useState<boolean>(true);
  return (
    <div className="App">
      {pokemonRequested ?
        <Detail />
        : <List />}
    </div>
  );
}

export default App;

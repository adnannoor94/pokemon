import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPokemonId: 0,
    pokemon: {
        name: '',
    },
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setCurrentPokemon: (state, action: PayloadAction<number>) => {
            state.currentPokemonId = action.payload
        }
    },
});

export default pokemonSlice.reducer;
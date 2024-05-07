import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPokemonId: 0,
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

export const { setCurrentPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
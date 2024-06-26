import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/api'
import pokemonReducer from './Slices/PokemonSlice';

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        pokemon: pokemonReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
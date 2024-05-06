// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from '../types/Pokemon.type';
import type { PokemonLinksResponse } from '../types/PokemonLink.type';
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getAllPokemon: builder.query<PokemonLinksResponse, void>({
            query: () => `pokemon`,
        }),
        getPokemonById: builder.query<Pokemon, number>({
            query: (id) => `pokemon/${id}`,
        }),
        getPokemonByIdM: builder.mutation<Pokemon, number>({
            query: (id) => `pokemon/${id}`
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPokemonQuery, useGetPokemonByIdQuery, useGetPokemonByIdMMutation } = pokemonApi


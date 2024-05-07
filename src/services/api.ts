import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from '../types/Pokemon.type';
import type { PokemonLink, PokemonLinksResponse } from '../types/PokemonLink.type';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
    endpoints: (builder) => ({
        getAllPokemon: builder.query<PokemonLink[], void>({
            query: () => ``,
            transformResponse: (response: PokemonLinksResponse) => {
                const pokemonResults: PokemonLink[] = [];

                response.results.forEach(pokemonLink => {
                    const urlParts = pokemonLink.url.split('/');

                    pokemonResults.push({
                        name: pokemonLink.name,
                        url: pokemonLink.url,
                        id: parseInt(urlParts[urlParts.length - 2])
                    })
                });

                return pokemonResults;
            }
        }),
        getPokemonById: builder.query<Pokemon, number>({
            query: (id) => `/${id}`,
        }),
    })
})

export const { useGetAllPokemonQuery, useGetPokemonByIdQuery } = pokemonApi


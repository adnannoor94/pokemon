export interface PokemonLink {
    name: string,
    url: string,
    id: number
}

export interface PokemonLinksResponse {
    count: number,
    next: string,
    previous: string,
    results: PokemonLink[]
}
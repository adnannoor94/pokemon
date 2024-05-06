export interface PokemonLink {
    name: string,
    url: string
}

export interface PokemonLinksResponse {
    count: number,
    next: string,
    previous: string,
    results: PokemonLink[]
}
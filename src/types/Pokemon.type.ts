

export interface Pokemon {
    name: string,
    weight: number,
    height: number,
    sprites?: {
        front_default: string,
        back_default: string
    },
    types?: PokemonType[]
}

interface PokemonType {
    type?: {
        name: string
    }
}
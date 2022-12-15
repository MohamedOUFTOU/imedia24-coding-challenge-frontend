import {IPokemon} from "../IPokemon";

export interface IPokemonApiResponse{
    count: number,
    next: string,
    previous: string
    results: IPokemon[]
}
import {IPokemon} from "../../model/pokemon/IPokemon";


export enum PokemonActionType {
    FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST',
    FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS',
    FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE'
    
}
export interface PokemonActionState {
    loading: boolean;
    pokemons: IPokemon[];
    offset: number,
    error: string | null;
}


export interface FetchPokemonsRequestPayload {
    offset: number
}
export interface FetchPokemonsSuccessPayload {
    pokemons: IPokemon[];
}

export interface FetchPokemonsFailurePayload {
    error: string;
}

export interface FetchPokemonsRequest {
    type: typeof PokemonActionType.FETCH_POKEMONS_REQUEST;
    payload: FetchPokemonsRequestPayload;
}

export type FetchPokemonsSuccess = {
    type: typeof PokemonActionType.FETCH_POKEMONS_SUCCESS;
    payload: FetchPokemonsSuccessPayload;
};

export type FetchPokemonsFailure = {
    type: typeof PokemonActionType.FETCH_POKEMONS_FAILURE;
    payload: FetchPokemonsFailurePayload;
};

export type PokemonsActions =
    | FetchPokemonsRequest
    | FetchPokemonsSuccess
    | FetchPokemonsFailure;

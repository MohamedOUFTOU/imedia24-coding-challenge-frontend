import {
    FetchPokemonsFailure, FetchPokemonsFailurePayload,
    FetchPokemonsRequest, FetchPokemonsRequestPayload,
    FetchPokemonsSuccess,
    FetchPokemonsSuccessPayload,
    PokemonActionType
} from "./types";


export const fetchPokemonsRequest = (payload: FetchPokemonsRequestPayload): FetchPokemonsRequest => ({
    type: PokemonActionType.FETCH_POKEMONS_REQUEST,
    payload
});

export const fetchPokemonsSuccess = (payload: FetchPokemonsSuccessPayload): FetchPokemonsSuccess => ({
    type: PokemonActionType.FETCH_POKEMONS_SUCCESS,
    payload
});

export const fetchPokemonsFailure = (payload: FetchPokemonsFailurePayload): FetchPokemonsFailure => ({
    type: PokemonActionType.FETCH_POKEMONS_FAILURE,
    payload
});
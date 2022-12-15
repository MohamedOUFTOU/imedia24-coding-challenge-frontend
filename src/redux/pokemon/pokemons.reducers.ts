import {PokemonActionState, PokemonActionType, PokemonsActions} from "./types";


const initial_state: PokemonActionState = {
    loading: false,
    pokemons: [],
    offset: 0,
    error: null
}

export default  (state:PokemonActionState = initial_state, action: PokemonsActions) => {
    switch (action.type) {
        case PokemonActionType.FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: [...state.pokemons,...action.payload.pokemons],
                error: null,
                loading: false
            };
        case PokemonActionType.FETCH_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true,
                offset: action.payload.offset
            };
        case PokemonActionType.FETCH_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return {
                ...state
            };
    }
}
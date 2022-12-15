import { call, put, takeLatest } from "redux-saga/effects";
import {getPokemons} from "../../service/pokemon.service";
import {fetchPokemonsFailure, fetchPokemonsSuccess} from "./pokemons.actions";
import {FetchPokemonsRequest, PokemonActionType} from "./types";
import {IPokemon} from "../../model/pokemon/IPokemon";

function* fetchPokemonsSaga(action: FetchPokemonsRequest) {
    try {
        const pokemons: IPokemon[] = yield call(getPokemons, action.payload.offset);
        yield put(
            fetchPokemonsSuccess({
                pokemons
            })
        );
    } catch (e) {
        yield put(
            fetchPokemonsFailure({
                // @ts-ignore
                error: e.message
            })
        );
    }
}

function* pokemonsSaga() {
    yield takeLatest(PokemonActionType.FETCH_POKEMONS_REQUEST, fetchPokemonsSaga);
}

export default pokemonsSaga;

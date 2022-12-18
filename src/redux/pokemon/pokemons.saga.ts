import { call, put, takeLatest } from "redux-saga/effects";
import {getPokemons} from "../../service/pokemon.service";
import {fetchPokemonsFailure, fetchPokemonsSuccess} from "./pokemons.actions";
import {FetchPokemonsRequest, PokemonActionType} from "./types";
import {IPokemon} from "../../model/pokemon/IPokemon";


const isFulfilled = <IPokemon>(input: PromiseSettledResult<IPokemon>): input is PromiseFulfilledResult<IPokemon> =>
    input.status === 'fulfilled'

function* fetchPokemonsSaga(action: FetchPokemonsRequest) {
    try {
        const pokemons: IPokemon[] = []
        const apiResponse : PromiseSettledResult<IPokemon>[] = yield call(getPokemons, action.payload.offset);
        apiResponse.forEach(
            (promise: PromiseSettledResult<IPokemon>) => {
                isFulfilled(promise) ? pokemons.push(promise.value): console.log(promise.reason)
            }
        )
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

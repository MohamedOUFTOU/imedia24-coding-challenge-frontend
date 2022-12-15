import { all, fork } from "redux-saga/effects";
import pokemonsSaga from "./pokemon/pokemons.saga";

export function* rootSaga() {
    yield all([fork(pokemonsSaga)]);
}

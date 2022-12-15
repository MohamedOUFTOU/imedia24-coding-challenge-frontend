import { combineReducers } from "redux";
import pokemonsReducers from "./pokemon/pokemons.reducers";

const rootReducer = combineReducers({
    pokemons: pokemonsReducers
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

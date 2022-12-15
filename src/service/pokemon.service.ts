import axios from "axios";
import {IPokemonApiResponse} from "../model/pokemon/api/IPokemonApiResponse";
import {IPokemon} from "../model/pokemon/IPokemon";

const API_BAE_URI = "https://pokeapi.co/api/v2/";
export const getPokemons = async (offset : number): Promise<IPokemon[]> => {
    const apiResponse: IPokemonApiResponse   =  (await  axios.get(API_BAE_URI.concat(`pokemon?offset=${offset}`))).data
    return  Promise.all(apiResponse.results.map(
        pokemon => getPokemonDetailsByName(pokemon.name)
    ))
}

const getPokemonDetailsByName = async (name: string): Promise<IPokemon> => {
    return  (await axios.get(API_BAE_URI.concat(`pokemon/${name}`))).data
}
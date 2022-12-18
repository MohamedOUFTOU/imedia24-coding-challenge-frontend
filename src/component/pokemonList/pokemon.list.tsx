import React, {ReactNode, useCallback, useEffect, useRef} from "react";
import './pokemon.list.css';
import {Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonsRequest} from "../../redux/pokemon/pokemons.actions";
import {RootState} from "../../redux/root.reducer";
import {PokemonCard} from "./pokemonCard/pokemon.card";
const PokemonList : React.FC = () => {

    const dispatcher = useDispatch();
    const { pokemons, loading } = useSelector(
        (state: RootState) => state.pokemons
    );
    // TODO : Add redux and redux saga
    // TODO : Add needed components
    // TODO : Make page responsive
    // TODO : Move on to tests

    const observer: any = useRef();
    const lastPokemonCardRef:any = useCallback((node: ReactNode) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatcher(fetchPokemonsRequest({offset: pokemons.length}))
            }
        })
        if (node) observer.current.observe(node)
    }, [])


    useEffect(() => {
        dispatcher(fetchPokemonsRequest({offset: 0}))
    }, [])


    return (
        <div className="pokemonList">
            {
                pokemons
                    .map(
                        (pokemon, index) => {
                            if (index === pokemons.length - 1){
                               return (
                                   <>
                                       <div ref={lastPokemonCardRef}>
                                           <PokemonCard pokemon={pokemon} key={index} />
                                       </div>
                                   </>

                               );
                            }else {
                                return (
                                   <PokemonCard pokemon={pokemon} key={index} />
                                );
                            }
                    }
                )
            }
            {
                loading && <Card loading={loading}/>
            }
        </div>
    )
}

export {PokemonList};
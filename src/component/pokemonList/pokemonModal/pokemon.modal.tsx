import React from "react";
import {Modal, Progress} from "antd";
import {IPokemon} from "../../../model/pokemon/IPokemon";
import './pokemon.modal.css';

interface PokemonModalProps {
    pokemon: IPokemon,
    showModel: boolean,
    handleShowModel: Function;
}

export const PokemonModal: React.FC<PokemonModalProps> = (props) => {
    return (
        <Modal
            centered={true}
            title={props.pokemon.name.concat(' Stats')}
            open={props.showModel}
            closable={false}
            onCancel={() => props.handleShowModel()}
            onOk={() => props.handleShowModel()}
            width={700}
        >
            <div className="modalContent">
                <div style={{alignContent: "center"}}>
                    <img alt="example" style={{ width: "200px" , height: "200px", margin: "10px", alignContent: "center" }} src={props.pokemon.sprites.other.dream_world.front_default} />
                </div>
                <div style={{justifyItems: "center", justifyContent: "center"}}>
                    {
                        props.pokemon.stats?.map(
                            (state, index) => (
                                    <Progress
                                        percent={state.base_stat}
                                        key={index}
                                        format={percent => state.stat.name?.concat(' ('+percent+' %)')}
                                    />
                            )
                        )
                    }
                </div>
            </div>
        </Modal>
    );
}
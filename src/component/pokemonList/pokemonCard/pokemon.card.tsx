import React, {useState} from "react";
import {Avatar, Card} from "antd";
import {IPokemon} from "../../../model/pokemon/IPokemon";
import {PokemonModal} from "../pokemonModal/pokemon.modal";
import { EllipsisOutlined} from '@ant-design/icons';

const { Meta } = Card;

interface PokemonCardProps {
    pokemon: IPokemon
}

export const PokemonCard: React.FC<PokemonCardProps> = (props) => {

    const [showModel, setShowModel] = useState<boolean>(false);


    const handleShowModel = () => {
        setShowModel(!showModel);
    }

    return (
        <>
            <Card
                hoverable
                actions={[
                    <EllipsisOutlined key="ellipsis" onClick={handleShowModel}/>,
                ]}
                cover={<img alt="example" style={{ width: "200px" , height: "200px", margin: "10px" }} src={props.pokemon.sprites.other.dream_world.front_default} />}
            >
                <Meta
                    avatar={<Avatar src="https://img.icons8.com/color/48/000000/pokeball-2.png"/>}
                    title={props.pokemon.name}
                />
            </Card>
            <PokemonModal pokemon={props.pokemon} showModel={showModel} handleShowModel={handleShowModel}/>
        </>

    );
}
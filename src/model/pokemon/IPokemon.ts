export interface IPokemon {
    name: string,
    id: number,
    base_experience: number,
    sprites: {
        official_artwork:{
            front_default: string
        },
        other: {
            dream_world:{
                front_default: string
            }
        }
    },
    stats: State[];
}


interface State {
    base_stat: number,
    stat: {
        name: string
    }
}
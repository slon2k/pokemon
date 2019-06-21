import React from 'react'
import PokemonItem from "./PokemonItem";

const PokemonList = ({items}) => {
    const itemsList = items.map(item => <PokemonItem key={item.name} item={item}/>)

    return (
        <div>
            {itemsList}
        </div>
    )
}

export default PokemonList
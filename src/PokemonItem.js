import React from 'react'

const id = (url) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match[1]
}

const PokemonItem = ({item}) => {

    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id(item.url)}.png`
    return (
        <div>
            <h4 style={{textTransform: 'capitalize'}}>{item.name}</h4>
            <img src={src} alt="" style={{width: 100}}/>
        </div>
    )
}

export default PokemonItem
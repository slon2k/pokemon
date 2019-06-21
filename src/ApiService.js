const BASE_URL = 'https://pokeapi.co/api/v2'
const ENDPOINT = '/pokemon'


export default class Api {
    async GetPokemon(pokemon) {
        const url = `${BASE_URL}${ENDPOINT}/${pokemon}`;
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(result.statusText)
        }

        return await result.json();
    }

    async GetPokemons({page = 1, limit = 20}) {
        const url = `${BASE_URL}${ENDPOINT}/?limit=${limit}&offset=${(page - 1)*limit}`;
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(result.statusText)
        }

        return await result.json();
    }
}
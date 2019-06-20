import React from 'react';
import './App.css';
import Search from "./Search";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import Api from "./ApiService"



export default class App extends React.Component {

    state = {
        loading: true,
        pokemons: []
    }

    api = new Api();

    componentDidMount() {
        this.api.GetPokemons({page: 1, pageSize: 2000}).then(response => this.setState({loading: false, pokemons: [...response.results]}));
    }

    render () {
        // this.api.GetPokemon(1).then(console.log);

        console.log(this.state);


        return (
            <div>
                <h2>App</h2>
                <Search/>
                <PokemonList/>
                <Pagination />
            </div>
        )
    }


}

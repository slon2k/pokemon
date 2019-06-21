import React from 'react';
import './App.css';
import Search from "./Search";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import Api from "./ApiService"

export default class App extends React.Component {

    state = {
        loading: true,
        pokemons: [],
        currentPage: 1,
        pageSize: 5,
        filter: ''
    }

    api = new Api();

    totalItems() {
        return this.filteredItems().length
    }

    totalPages() {
        const {pageSize} = this.state;
        return Math.ceil(this.totalItems() / pageSize)
    }

    changePage = (diff) => {
        const {currentPage} = this.state;
        this.setPage(currentPage + diff);
    }

    setPage = (page) => {
        if (page > 0 && page <= this.totalPages()){
            this.setState({currentPage: page})
        }
    }

    changePageSize = (pageSize) => {
        this.setState({pageSize})
    }

    changeFilter = (filter) => {
        this.setState({filter, currentPage: 1})
    }

    filteredItems() {
        const {pokemons, filter} = this.state;
        return [...pokemons].filter(item => item.name.includes(filter));
    }

    pagedItems() {
        const {pageSize, currentPage} = this.state;
        return [...this.filteredItems()].splice((currentPage - 1) * pageSize, pageSize )
    }

    componentDidMount() {
        this.api.GetPokemons({page: 1, limit: 2000})
            .then(response => this.setState({loading: false, pokemons: [...response.results]}))
            .catch(console.log);
    }

    render () {
        const {currentPage, filter, loading, pageSize} = this.state;
        const spinner = () => (<div>Loading...</div>);

        return (
            <div style={{margin: 20}}>
                <Search filter={filter} onChange={(event) => this.changeFilter(event.target.value)} />
                {loading && spinner()}
                <PokemonList items = {this.pagedItems()}/>
                <Pagination currentPage = {currentPage}
                            pageSize = {pageSize}
                            totalPages = {this.totalPages()}
                            changePage = {this.changePage}
                            changePageSize = {this.changePageSize}
                            setPage = {this.setPage}
                />
            </div>
        )
    }
}

import React from 'react'

const Search = ({filter, onChange}) => {
    return(
        <div>
            <input type="text"
                   value={filter}
                   onChange={onChange}
                   placeholder={"Pikachu ..."}
            />
        </div>
    )
}

export default Search
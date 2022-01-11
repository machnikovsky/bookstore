import React from 'react'

function SearchBar({setQuery}) {
    return (
        <div className="search-bar"> 
        <input
            type="text"
            placeholder="Wprowadź tytuł, rezysera lub słowo kluczowe..."
            onChange={ e => setQuery(e.target.value == '' ? 'a' : e.target.value) }
        /> 
        </div>
    )
}

export default SearchBar

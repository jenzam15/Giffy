import React, { useState } from 'react'

function SearchForm({ onSubmit }) {

    const [keyword, setKeyword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //navegar hacia otra ruta
        onSubmit({ keyword });
    };

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input
                placeholder="Search a gif here..."
                onChange={handleChange}
                type="text"
                value={keyword}
            ></input>
        </form>
    )
}

export default React.memo(SearchForm)

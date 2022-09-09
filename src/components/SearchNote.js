import React from 'react';

function SearchNote({ query, onSearch }) {
    return (
        <input
            type="search"
            name="search-form"
            id="search-form"
            className="note-search"
            placeholder="Cari catatan ..."
            value={query}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchNote;

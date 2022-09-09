import React from 'react';
import SearchNote from './SearchNote';

function NoteHeader({ query, onSearch }) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <SearchNote query={query} onSearch={onSearch} />
        </div>
    );
}

export default NoteHeader;

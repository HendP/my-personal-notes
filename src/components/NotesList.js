import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes }) {
    return (
        <React.Fragment>
            <div className="notes-list">
                {notes.length > 0 &&
                    notes.map((note) => <NoteItem key={note.id} {...note} />)}
                {notes.length <= 0 && (
                    <p className="notes-list__empty-message">
                        Tidak ada catatan
                    </p>
                )}
            </div>
        </React.Fragment>
    );
}

export default NotesList;

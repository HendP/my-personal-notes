import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete }) {
    return (
        <React.Fragment>
            {notes.length > 0 && (
                <div className="notes-list">
                    {notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            {...note}
                        />
                    ))}
                </div>
            )}
            {notes.length <= 0 && (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </React.Fragment>
    );
}

export default NotesList;

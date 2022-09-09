import React from 'react';
import NotesList from './NotesList';

function NoteArchive({query, archivedNotes, onDelete, onArchive, filteredArchivedNotes}) {
    return (
        <React.Fragment>
            <h2>Arsip</h2>
            {query.length <= 0 ? (
                <NotesList
                    notes={archivedNotes}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            ) : (
                <NotesList
                    notes={filteredArchivedNotes}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            )}
        </React.Fragment>
    );
}

export default NoteArchive;

import React from 'react';
import NoteInput from './NoteInput';
import NoteActive from './NoteActive';
import NoteArchive from './NoteArchive';

function NoteBody({
    activeNotes,
    archivedNotes,
    filteredActiveNotes,
    filteredArchivedNotes,
    onAdd,
    onDelete,
    onArchive,
    query,
}) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={onAdd} />
            <NoteActive
                query={query}
                activeNotes={activeNotes}
                onDelete={onDelete}
                onArchive={onArchive}
                filteredActiveNotes={filteredActiveNotes}
            />
            <NoteArchive
                query={query}
                archivedNotes={archivedNotes}
                onDelete={onDelete}
                onArchive={onArchive}
                filteredArchivedNotes={filteredArchivedNotes}
            />
        </div>
    );
}

export default NoteBody;

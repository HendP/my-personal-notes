import React from 'react';
import NotesList from './NotesList';
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
            {/* {query.length <= 0 ? (
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
            )} */}
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

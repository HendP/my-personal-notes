import React from 'react';
import NotesList from './NotesList';
import NoteInput from './NoteInput';
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
            <h2>Catatan Aktif</h2>
            {query.length <= 0 ? (
                <NotesList
                    notes={activeNotes}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            ) : (
                <NotesList
                    notes={filteredActiveNotes}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            )}
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
        </div>
    );
}

export default NoteBody;

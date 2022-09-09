import React from 'react';

function ArchiveButton({ id, onArchive, status }) {
    return (
        <React.Fragment>
            {status === 'Active' && (
                <button
                    className="note-item__archive-button"
                    onClick={() => onArchive(id)}
                >
                    Archive
                </button>
            )}

            {status === 'Archive' && (
                <button
                    className="note-item__archive-button"
                    onClick={() => onArchive(id)}
                >
                    Activate
                </button>
            )}
        </React.Fragment>
    );
}

export default ArchiveButton;

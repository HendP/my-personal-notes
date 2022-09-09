import React from 'react';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            query: '',
            filteredNotes: [],
        };

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onAddNotehandler = this.onAddNotehandler.bind(this);
        this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
        this.onActiveNotes = this.onActiveNotes.bind(this);
        this.onArchivedNotes = this.onArchivedNotes.bind(this);
    }

    onAddNotehandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    },
                ],
            };
        });
    }

    onArchivedNoteHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });
        this.setState({ notes: notes });
        console.log(notes);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: notes });
    }

    onSearchHandler(query) {
        const lowerQuery = query.toLowerCase();
        const notes = this.state.notes;
        const filteredActiveNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(lowerQuery)
        );
        const filteredArchivedNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(lowerQuery)
        );
        this.setState({ query: lowerQuery });
        this.setState({ filteredNotes: filteredActiveNotes });
        this.setState({ filteredNotes: filteredArchivedNotes });
    }

    onActiveNotes() {
        const activeNotes = this.state.notes.filter(
            (note) => note.archived === false
        );
        return activeNotes;
    }

    onArchivedNotes() {
        const archivedNotes = this.state.notes.filter(
            (note) => note.archived === true
        );
        return archivedNotes;
    }

    render() {
        const activeNotes = this.state.notes.filter(
            (note) => note.archived === false
        );
        const archivedNotes = this.state.notes.filter(
            (note) => note.archived === true
        );
        const filteredActiveNotes = this.state.filteredNotes.filter(
            (note) => note.archived === false
        );
        const filteredArchivedNotes = this.state.filteredNotes.filter(
            (note) => note.archived === true
        );
        return (
            <React.Fragment>
                <NoteHeader
                    query={this.state.query}
                    onSearch={this.onSearchHandler}
                />
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNotehandler} />
                    <h2>Catatan Aktif</h2>
                    {this.state.query.length <= 0 ? (
                        <NotesList
                            notes={activeNotes}
                            onDelete={this.onDeleteNoteHandler}
                            onArchive={this.onArchivedNoteHandler}
                        />
                    ) : (
                        <NotesList
                            notes={filteredActiveNotes}
                            onDelete={this.onDeleteNoteHandler}
                            onArchive={this.onArchivedNoteHandler}
                        />
                    )}
                    <h2>Arsip</h2>
                    {this.state.query.length <= 0 ? (
                        <NotesList
                            notes={archivedNotes}
                            onDelete={this.onDeleteNoteHandler}
                            onArchive={this.onArchivedNoteHandler}
                        />
                    ) : (
                        <NotesList
                            notes={filteredArchivedNotes}
                            onDelete={this.onDeleteNoteHandler}
                            onArchive={this.onArchivedNoteHandler}
                        />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default NotesApp;

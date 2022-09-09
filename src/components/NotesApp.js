import React from 'react';
import { getInitialData } from '../utils';
import NoteBody from './NoteBody';
import NoteHeader from './NoteHeader';

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
                <NoteBody
                    activeNotes={activeNotes}
                    archivedNotes={archivedNotes}
                    filteredActiveNotes={filteredActiveNotes}
                    filteredArchivedNotes={filteredArchivedNotes}
                    onAdd={this.onAddNotehandler}
                    onDelete={this.onDeleteNoteHandler}
                    onArchive={this.onArchivedNoteHandler}
                    query={this.state.query}
                />
            </React.Fragment>
        );
    }
}

export default NotesApp;

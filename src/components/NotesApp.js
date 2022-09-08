import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
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
                        createAt: showFormattedDate(+new Date()),
                        archived: false,
                    },
                ],
            };
        });
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: notes });
    }

    onSearchHandler(query) {
        const lowerQuery = query.toLowerCase();
        const notes = this.state.notes;
        const filteredNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(lowerQuery)
        );
        this.setState({ query: lowerQuery });
        this.setState({ filteredNotes: filteredNotes });
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="note-search"
                        placeholder="Cari catatan ..."
                        value={this.state.query}
                        onChange={(e) => this.onSearchHandler(e.target.value)}
                    />
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNotehandler} />
                    <h2>Catatan Aktif</h2>
                    {this.state.query.length <= 0 ? (
                        <NotesList
                            notes={this.state.notes}
                            onDelete={this.onDeleteNoteHandler}
                        />
                    ) : (
                        <NotesList
                            notes={this.state.filteredNotes}
                            onDelete={this.onDeleteNoteHandler}
                        />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default NotesApp;

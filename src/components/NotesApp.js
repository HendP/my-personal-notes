import React from 'react';
import { getInitialData } from '../utils';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            query: '',
            filteredNotes: [],
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
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
                    <h2>Catatan Aktif</h2>
                    {this.state.query.length <= 0 ? (
                        <NotesList
                            notes={this.state.notes}
                            onDelete={this.onDeleteHandler}
                        />
                    ) : (
                        <NotesList
                            notes={this.state.filteredNotes}
                            onDelete={this.onDeleteHandler}
                        />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default NotesApp;

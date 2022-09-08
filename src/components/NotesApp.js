import React from 'react';
import { getInitialData } from '../utils';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes:notes });
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

                    />
                </div>
                <div className="note-app__body">
                    <h2>Catatan Aktif</h2>
                    <NotesList
                        notes={this.state.notes}
                        onDelete={this.onDeleteHandler}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default NotesApp;

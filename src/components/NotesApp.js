import React from 'react';
import { getInitialData } from '../utils';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-app__header">
                    <h1>Notes</h1>
                </div>
                <div className="note-app__body">
                    <h2>Catatan Aktif</h2>
                    <NotesList notes={this.state.notes} />
                </div>
            </React.Fragment>
        );
    }
}

export default NotesApp;

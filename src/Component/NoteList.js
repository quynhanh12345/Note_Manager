import { onValue } from 'firebase/database';
import React, { Component } from 'react';
import noteData from '../firebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }


    componentWillMount() {
        onValue(noteData, (notes) => {
            var arrayData = [];
            notes.forEach(note => {
                const index = note.key;
                console.log(index)
                const noteTitle = note.val().noteTitle;
                const noteContent = note.val().noteContent;
                arrayData.push({ index: index, noteTitle: noteTitle, noteContent: noteContent })

            })
            this.setState({ dataFirebase: arrayData });

        })
    }


    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, index) => {
                return (
                    <NoteItem key={index} index={index} note={value} noteTitle={value.noteTitle} noteContent={value.noteContent} />
                )
            })

        }
    }
    render() {
        return (
            <div className="col" >
                <div className="accordion" id="noteList">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;
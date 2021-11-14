import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }


    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.index,
            });
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    addData = (title, content) => {
        if (this.state.id) {
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteContent = this.state.noteContent;
            editObject.noteTitle = this.state.noteTitle;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus();
            this.props.alertOn('Edited', 'success');
        }
        else {
            var item = {};
            if (title || content) {
                item.noteTitle = title;
                item.noteContent = content;
                // this.props.getData(item)
                this.props.addDataStore(item);
                this.props.alertOn('Added', 'warning');
            }


        }

    }
    printTitle = () => {
        if (this.props.addStatus) { return <h4 className="text-center">Add new note</h4> }
        else { return <h4 className="text-center">Edit note</h4> }
    }
    render() {
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="mb-3">
                        <label htmlFor="noteTitle" className="form-label">Note title</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Note title" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Put note title here</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="noteContent" className="form-label">Note content</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Note content" />
                        <small id="helpIdNoteContent" className="form-text text-muted">Put note content here</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block col-12">Save</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({ type: 'ADD_DATA', getItem })
        },
        editDataStore: (getItem) => {
            dispatch({ type: 'EDIT', getItem })
        },
        changeEditStatus: () => {
            dispatch({ type: 'CHANGE_EDIT_STATUS' })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({ type: 'ALERT_ON', alertContent, alertType })
        },
        alertOff: () => {
            dispatch({ type: 'ALERT_OFF' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);


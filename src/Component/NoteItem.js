import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
    twoActionButton = () => {
        this.props.changeEditStatus();
        this.props.getEditData(this.props.note)
        console.log(22222211111)
        console.log(this.props.note)
    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.index);
        this.props.alertOn('Removed', 'danger')
    }
    render() {
        return (
            <div className="accordion-item ">
                <h2 className="accordion-header d-flex" id={'number' + this.props.index} >
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#Number' + this.props.index} aria-expanded="true" aria-controls={'Number' + this.props.index}>
                        {this.props.noteTitle}
                    </button>
                    <div className="btn-group ">
                        <button className="btn btn-outline-info" onClick={() => this.twoActionButton()}>Edit</button>
                        <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}> Remove</button>
                    </div>

                </h2 >
                <div id={'Number' + this.props.index} className="accordion-collapse collapse show" aria-labelledby={'number' + this.props.index} data-bs-parent="#noteList">
                    <div className="accordion-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({ type: 'CHANGE_EDIT_STATUS' })
        },
        getEditData: (editObject) => {
            dispatch({ type: 'GET_EDIT_DATA', editObject })
        },
        getDeleteData: (deleteId) => {
            dispatch({ type: 'DELETE', deleteId })
        },
        alertOn: (alertContent) => {
            dispatch({ type: 'ALERT_ON', alertContent })
        },
        alertOff: () => {
            dispatch({ type: 'ALERT_OFF' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
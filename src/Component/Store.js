import noteData from '../firebaseConnect';
import { push } from "firebase/database";
import { child, update, remove } from "firebase/database";


var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false,
    AlertShow: false,
    AlertContent: '',
    AlertType: ''
}
const allReducers = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            push(noteData, action.getItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return { ...state, isEdit: !state.isEdit }
        case 'CHANGE_ADD_STATUS':
            return { ...state, isAdd: !state.isAdd }
        case 'GET_EDIT_DATA':
            console.log(state.editItem)
            console.log('day la edit item')
            return { ...state, editItem: action.editObject }
        case 'EDIT':

            update(child(noteData, action.getItem.id), {
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log(action.getItem)
            console.log(action.getItem.noteTitle)
            console.log(888)
            return { ...state, editItem: {} }
        case 'DELETE':
            remove(child(noteData, action.deleteId))
            return state
        case 'ALERT_ON':
            return { ...state, AlertShow: true, AlertContent: action.alertContent, AlertType: action.alertType }
        case 'ALERT_OFF':
            return { ...state, AlertShow: false }
        default:
            return state
    }
}
var store = redux.createStore(allReducers);
store.subscribe(function () { console.log(JSON.stringify(store.getState())) })

export default store;
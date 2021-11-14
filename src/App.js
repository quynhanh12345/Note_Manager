
import './App.css';
import React, { Component } from 'react';
import Nav from './Component/Nav';
import NoteList from './Component/NoteList';
import NoteForm from './Component/NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './Component/AlertInfo';

class App extends Component {
  showForm = () => {
    if (this.props.isEdit) { return <NoteForm /> }
  }


  render() {
    return (
      <div>
        <Nav />
        <AlertInfo />
        <div className="container">
          <div className="row">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


export default connect(mapStateToProps)(App)


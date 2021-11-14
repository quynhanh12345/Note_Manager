import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    handleAdd = () => {
        this.props.changeEditStatus();
        this.props.changeAddStatus()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="https://www.facebook.com/quynhanh5100/">noteManager</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" onClick={() => this.handleAdd()}>Add notes</a>
                        </li>
                    </ul>
                </div>
            </nav>
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
        changeAddStatus: () => {
            dispatch({ type: 'CHANGE_ADD_STATUS' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
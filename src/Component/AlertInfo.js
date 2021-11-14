import React, { Component } from 'react';
import { Alert } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => { this.props.alertOff() }

    render() {
        if (this.props.AlertShow === false) return null;
        return (
            <Alert type={this.props.AlertType} timeout={1000} onDismiss={() => this.handleDismiss()} >
                {this.props.AlertContent}
            </Alert>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent,
        AlertType: state.AlertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({ type: 'ALERT_OFF' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
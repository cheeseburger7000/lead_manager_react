import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            console.log(error);
            alert.error(`status: ${error.status} msg: ${error.msg}`);
            // TODO email unique
            // if (error.message.email) {
            //     alert.error();
            // }
        }

        if (message !== prevProps.message) {
            if (message.deleteLead) {
                alert.success(message.deleteLead);
            }
            if (message.addLead) {
                alert.success(message.addLead);
            }
            if (message.passwordNotMatch) {
                alert.error(message.passwordNotMatch);
            }
        }
    }

    static propTypes = {
        error: PropTypes.object.isRequired, 
        message: PropTypes.object.isRequired
    }

    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messageReducer
})

export default connect(mapStateToProps)(withAlert()(Alerts));

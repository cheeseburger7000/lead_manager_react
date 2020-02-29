import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        // TODO email unique
        // array.join() transfor array -> string
        if (error !== prevProps.error) {
            const result = error.msg.map(v => `${v.field} ${v.defaultMessage}`);
            if (result.length > 0) {
                alert.error(result[0]);
            }
        }

        if (message !== prevProps.message) {
            if (message.deleteLead) {
                alert.success(message.deleteLead);
            }
            if (message.addLead) {
                alert.success(message.addLead);
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

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// 对 react-router-dom 的 route 组件进行的一层，提供了权限校验的能力
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route 
        {...rest}
        render={props => {
            if (auth.isLoading) {
                return <h2>Loading ...</h2>
            } else if (!auth.isAuthenticated) {
                return <Redirect to="/login" />
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(PrivateRoute);
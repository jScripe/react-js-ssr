import React, { Component } from 'react';
import Type from 'prop-types';

class ErrorBoundary extends Component {
    static propTypes = { children: Type.node };

    state = { hasError: false };

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
        console.log(error, info);
    }

    render() {
        let { hasError } = this.state;
        let { children } = this.props;
        if (hasError) {
            return (
                <h1>Something went wrong.</h1>
            );
        }
        return children;
    }
}

export default ErrorBoundary;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import MainContent from '../main-content';
import Footer from '../footer';
import ErrorBoundary from '../error-boundary';
import Message from '../message/message';
import '../../vars/reset.scss';

@connect()
class StartPage extends Component {
    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    <Header />
                    <MainContent>
                        <Message>No films found</Message>
                    </MainContent>
                    <Footer />
                </React.Fragment>
            </ErrorBoundary>
        );
    }
}

export default StartPage;

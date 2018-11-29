import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import MainContent from '../main-content';
import Footer from '../footer';
import ResultsBody from '../results-body';
import ErrorBoundary from '../error-boundary';
import '../../vars/reset.scss';

@connect()
class SearchPage extends Component {
    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    <Header />
                    <MainContent>
                        <ResultsBody history={this.props.history} params={ this.props.location.search } />
                    </MainContent>
                    <Footer />
                </React.Fragment>
            </ErrorBoundary>
        );
    }
}

export default SearchPage;

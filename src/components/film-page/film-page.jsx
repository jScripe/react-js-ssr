import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainContent from '../main-content';
import FilmsByTheSameGenre from '../films-by-the-same-genre';
import Footer from '../footer';
import HeaderWithFilmDescription from '../header-with-film-description';
import ErrorBoundary from '../error-boundary';
import '../../vars/reset.scss';

@connect()
class FilmPage extends Component {
    static propTypes = {
        match: PropTypes.objectOf(
            PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.string,
                PropTypes.bool
            ])
        )
    }

    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    <HeaderWithFilmDescription filmId={ this.props.match.params.filmid } />
                    <MainContent>
                        <FilmsByTheSameGenre />
                    </MainContent>
                    <Footer />
                </React.Fragment>
            </ErrorBoundary>
        );
    }
}

export default FilmPage;

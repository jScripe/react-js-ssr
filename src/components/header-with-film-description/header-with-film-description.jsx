import React, { Component } from 'react';
import cn from 'cn-decorator';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Logo from '../logo/logo';
import Button from '../ui/button/button';
import Label from '../ui/label/label';
import './header-with-film-description.scss';
import { startFetchFilmsByTheSameGenre } from '../../actions/getFilmsByTheSameGenre';
import { startFetchFilm } from '../../actions/film';


@cn('film-description')
class HeaderWithFilmDescription extends Component {
    static propTypes = {
        chosenFilm: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
            title: PropTypes.string,
            genres: PropTypes.arrayOf(
                PropTypes.string
            ),
            poster_path: PropTypes.string,
            revenue: PropTypes.number,
            runtime: PropTypes.number,
            vote_average: PropTypes.number,
            vote_count: PropTypes.number,
            tagline: PropTypes.string,
            release_date: PropTypes.string,
            overview: PropTypes.string,
            budget: PropTypes.number
        }),
        filter: PropTypes.string,
        value: PropTypes.string,
        filmId: PropTypes.string,
        actions: PropTypes.objectOf(
            PropTypes.func
        ),
        release_date: PropTypes.string
    }

    componentDidMount() {
        let { startFetchFilm, startFetchFilmsByTheSameGenre } = this.props.actions;
        startFetchFilm(this.props.filmId);
        startFetchFilmsByTheSameGenre(this.props.chosenFilm.genres[0]);

        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        let { startFetchFilm, startFetchFilmsByTheSameGenre } = this.props.actions;
        if (prevProps.filmId !== this.props.filmId) {
            startFetchFilm(this.props.filmId);
            startFetchFilmsByTheSameGenre(this.props.chosenFilm.genres[0]);
            window.scrollTo(0, 0);
        }
    }


    render(cn) {
        let { chosenFilm } = this.props;
        return (
            <div className={ cn() }>
                <Logo />
                <NavLink to={ `/search/?searchBy=${this.props.filter}&search=${this.props.value}` }>
                    <Button
                        className={ cn('button-search') }
                        theme='light-pink'
                        size='medium'
                    >
                        { 'SEARCH' }
                    </Button>
                </NavLink>
                <div className={ cn('info') }>
                    <div className={ cn('poster-container') }>
                        <img
                            className={ cn('poster') }
                            src={ chosenFilm.poster_path }
                            alt='alternative'
                        />
                    </div>
                    <div className={ cn('description') }>
                        <Label size='large' theme='pink' display='block'>{ chosenFilm.title }</Label>
                        <Label display='block'>{ chosenFilm.tagline }</Label>
                        <Label display='inline-block'>{ chosenFilm.release_date.substr(0, 4) }</Label>
                        <Label display='inline-block'>
                            { chosenFilm.runtime }
                            { ' min' }
                        </Label>
                        <Label display='block'>
                            { chosenFilm.overview }
                        </Label>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    films: state.search.list,
    limit: state.search.limit,
    chosenFilm: state.film.chosenFilm,
    value: state.searchField.value,
    filter: state.search.filter
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        startFetchFilmsByTheSameGenre,
        startFetchFilm
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWithFilmDescription);
export { HeaderWithFilmDescription };

import React, { Component } from 'react';
import { css } from 'react-emotion';
import bemCn from 'bem-cn-fast';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './films-by-the-same-genre.scss';
import PropTypes from 'prop-types';
import Label from '../ui/label/label';
import FilmCard from '../film-card';

const override = css`
    display: block;
    position:relative;
    top:20px;
    margin:auto;
`;


const cn = bemCn('films-by-the-same-genre');

const mapStateToProps = state => ({
    films: state.filmsByTheSameGenreReducer.filmsByTheSameGenre,
    isFetching: state.search.isFetching
});

class FilmsByTheSameGenre extends Component {
    static propTypes = {
        films: PropTypes.arrayOf(
            PropTypes.object
        ),
        isFetching: PropTypes.bool,
        actions: PropTypes.shape({
            getFilmInfo: PropTypes.func
        })
    }

    render() {
        let {
            films,
            isFetching
        } = this.props;

        return (
            <div className={ cn() }>
                <Label display='block' theme='results-bar'>Films by the same genre</Label>
                { films.map((film) => {
                    let {
                        id,
                        poster_path: posterPath,
                        title,
                        genres,
                        release_date: year
                    } = film;

                    let address = `/film/${id}`;

                    return (
                        <NavLink to={ address } key={ id }>
                            <FilmCard
                                key={ id }
                                imagePath={ posterPath }
                                title={ title }
                                genre={ genres }
                                onClick={ this.chooseFilm }
                                idOfFilm={ id }
                                releaseDate={ year }
                            />
                        </NavLink>
                    );
                }) }
            </div>
        );
    }
}

export default connect(mapStateToProps)(FilmsByTheSameGenre);

import React, { Component } from 'react';
import bemCn from 'bem-cn-fast';
import { bindActionCreators } from 'redux';
import { css } from 'react-emotion';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './results-body.scss';
import PropTypes from 'prop-types';
import FilmCard from '../film-card';
import ResultsBar from '../results-bar';
import { startFetchSearch } from '../../actions/search';
import { changeValueOfSearchField } from '../../actions/filters';



const cn = bemCn('results-body');

class ResultsBody extends Component {
    static propTypes = {
        films: PropTypes.arrayOf(
            PropTypes.object
        ),
        isFetching: PropTypes.bool,
        value: PropTypes.string,
        filter: PropTypes.string,
        resultsFilter: PropTypes.string,
        actions: PropTypes.shape({
            changeValueOfSearchField: PropTypes.func,
            startFetchSearch: PropTypes.func,
            getFilmInfo: PropTypes.func
        }),
        params: PropTypes.string,
        history: PropTypes.objectOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.number,
                PropTypes.object,
                PropTypes.func
            ])
        )
    }


    componentDidMount() {
        const PARAMS = new URLSearchParams(this.props.params);
        let filter = PARAMS.get('searchBy');
        let value = PARAMS.get('search');
        let resultsFilter = PARAMS.get('sortBy');
        this.props.actions.changeValueOfSearchField(value);
        this.props.actions.startFetchSearch(filter, value, resultsFilter);
    }

    /* eslint max-len:0 */

    componentDidUpdate(nextProps) {
        this.props.history.push({ search: `?searchBy=${this.props.filter}&search=${this.props.value}&sortBy=${this.props.resultsFilter}` });
        if (this.props.params !== nextProps.params) {
            const PARAMS = new URLSearchParams(this.props.params);
            let filter = PARAMS.get('searchBy');
            let value = PARAMS.get('search');
            let resultsFilter = PARAMS.get('sortBy');
            this.props.actions.startFetchSearch(filter, value, resultsFilter);
        }
    }

    render() {
        let {
            films,
            value
        } = this.props;

        return (
            <div className={ cn() }>
                <ResultsBar searchFieldText={ value } />
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

const mapStateToProps = state => ({
    films: state.search.list,
    currentFilm: state.search.chosenFilm,
    isFetching: state.search.isFetching,
    value: state.searchField.value,
    filter: state.search.filter,
    resultsFilter: state.resultsFilter.resultsFilter
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        startFetchSearch,
        changeValueOfSearchField
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);

import React, { Component } from 'react';
import cn from 'cn-decorator';
import './results-bar.scss';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import RadioGroup from '../radio-group';
import { changeResultsFilter } from '../../actions/filters';
import { startFetchSearch } from '../../actions/search';
import Radio from '../radio';
import Label from '../ui/label/label';

const mapStateToProps = state => ({
    films: state.search.list,
    resultsFilter: state.resultsFilter.resultsFilter,
    value: state.searchField.value,
    filter: state.search.filter,
    limit: state.search.limit
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeResultsFilter,
        startFetchSearch
    }, dispatch)
});


@cn('results-bar')
class ResultsBar extends Component {
    static propTypes = {
        films: PropTypes.arrayOf(
            PropTypes.object
        ),
        startFetchSearch: PropTypes.func,
        filter: PropTypes.string,
        limit: PropTypes.string,
        value: PropTypes.string,
        resultsFilter: PropTypes.string,
        actions: PropTypes.objectOf(
            PropTypes.func
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.resultsFilter !== this.props.resultsFilter) {
            const {
                value,
                filter,
                resultsFilter,
                actions
            } = this.props;

            actions.startFetchSearch(
                filter, value, resultsFilter
            );
        }
    }

    render(cn) {
        return (
            <div className={ cn() }>
                <Label theme='dark'>
                    { this.props.films.length }
                    { ' movies found' }
                </Label>
                <Label theme='dark' side='right'>
                    { 'Sort by' }
                </Label>
                <RadioGroup type='resultsFilter' onChange={ this.changeResultsFilter } value={ this.props.resultsFilter } filter={ this.props.filter } resultsFilter={ this.props.resultsFilter } searchFieldText={ this.props.value }>
                    {
                        ['release date', 'rating'].map(text => (
                            <Radio
                                key={ text }
                                text={ text }
                                value={ text }
                                type='button'
                            />
                        ))
                    }
                </RadioGroup>

            </div>
        );
    }

    @autobind
    changeResultsFilter(text) {
        const {
            actions
        } = this.props;
        actions.changeResultsFilter(text);
    }
}
export { ResultsBar };
export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);

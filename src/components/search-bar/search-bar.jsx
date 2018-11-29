import React, { Component } from 'react';
import './search-bar.scss';
import cn from 'cn-decorator';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { bindActionCreators } from 'redux';
import RadioGroup from '../radio-group';
import Button from '../ui/button/button';
import Radio from '../radio';
import Label from '../ui/label/label';
import { changeFilterOfSearch } from '../../actions/filters';


const mapStateToProps = state => ({
    value: state.searchField.value,
    filter: state.search.filter,
    resultsFilter: state.resultsFilter.resultsFilter
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeFilterOfSearch
    }, dispatch)
});

@cn('search-bar')
class SearchBar extends Component {
    /* eslint class-methods-use-this-regexp/class-methods-use-this: 0 */
    static propTypes = {
        actions: PropTypes.shape({
            getResultsOfSearch: PropTypes.func
        }),
        value: PropTypes.string,
        filter: PropTypes.string,
        resultsFilter: PropTypes.string,
        limit: PropTypes.number
    };


    render(cn) {
        return (
            <div className={ cn() }>
                <Label>SEARCH BY</Label>

                <RadioGroup type='searchFilter' onChange={ this.changeParameterSearchBy } value={ this.props.filter }>
                    {
                        ['title', 'genres'].map(text => (
                            <Radio
                                text={ text }
                                key={ text }
                                value={ text }
                                type='button'
                            />
                        ))
                    }
                </RadioGroup>
                <NavLink to={ `/search/?searchBy=${this.props.filter}&search=${this.props.value}&sortBy=${this.props.resultsFilter}` }>
                    <Button
                        className={ cn('button', { side: 'right' }) }
                        size='large'
                        side='right'
                    >
                        { 'SEARCH' }
                    </Button>
                </NavLink>
            </div>
        );
    }

    @autobind
    changeParameterSearchBy(text) {
        let { actions } = this.props;
        let { changeFilterOfSearch } = actions;
        changeFilterOfSearch(text);
    }
}
export { SearchBar };
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

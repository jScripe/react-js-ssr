import React, { Component } from 'react';
import './header.scss';
import { block } from 'bem-cn';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logo from '../logo';
import SearchField from '../search-field';
import SearchBar from '../search-bar';
import { changeValueOfSearchField } from '../../actions/filters';

const cn = block('header');

const mapStateToProps = state => ({
    value: state.search.value,
    isFetching: state.search.isFetching
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeValueOfSearchField
    }, dispatch)
});

class Header extends Component {
    static propTypes ={
        actions: PropTypes.objectOf(
            PropTypes.func
        ),
        value: PropTypes.string
    }

    render() {
        return (
            <div className={ cn() }>
                <Logo />
                <SearchField searchFieldText={ this.props.value } onChange={ this.handleChange } />
                <SearchBar searchFieldText={ this.props.value } limit={ 100 } />
            </div>
        );
    }

    @autobind
    handleChange(event) {
        let { actions: { changeValueOfSearchField } } = this.props;
        changeValueOfSearchField(event.target.value);
    }
}

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);

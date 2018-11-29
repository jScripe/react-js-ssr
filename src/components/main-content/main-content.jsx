import React, { Component } from 'react';
import './main-content.scss';
import bemCn from 'bem-cn-fast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../message';

const cn = bemCn('main-content');

const mapStateToProps = state => ({
    value: state.search.value,
    films: state.search.list,
    isFetching: state.search.isFetching
});


class MainContent extends Component {
    static propTypes = {
        films: PropTypes.arrayOf(
            PropTypes.object
        ),
        isFetching: PropTypes.bool,
        actions: PropTypes.shape({
            getFilmInfo: PropTypes.func
        }),
        value: PropTypes.string,
        children: PropTypes.node
    }

    render() {
        let {
            films,
            children
        } = this.props;

        if (!films) {
            return (
                <div className={ cn() }>
                    <Message>No films found</Message>
                </div>
            )
        }

        return (
            <div className={ cn() }>
                { films.length === 0 && <Message>No films found</Message> }
                { children }
            </div>
        );
    }
}

export default connect(mapStateToProps)(MainContent);
export { MainContent as PureMainContent };

import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Type from 'prop-types';
import cn from 'cn-decorator';
import './radio.scss';

@cn('radio')

class Radio extends Component {
    static propTypes = {
        className: Type.string,
        value: Type.string,
        theme: Type.oneOf([
            'search-bar-default',
            'search-bar-extra',
            'default', 'results-bar-default',
            'results-bar-extra',
            'light-pink'
        ]),
        size: Type.oneOf(['large', 'small', 'medium']),
        side: Type.oneOf(['left', 'center', 'right']),
        children: Type.string,
        text: Type.string,
        onClick: Type.func,
        onChange: Type.func
    }

    static defaultProps = {
        theme: 'default',
        size: 'small',
        side: 'left'
    }

    render(cn) {
        let {
            theme,
            size,
            text
        } = this.props;

        return (
            <button
                type='button'
                onClick={ this.handleChange }
                className={ cn({
                    theme: `${theme}`,
                    size: `${size}`
                }) }
            >
                { text }
            </button>
        );
    }

    @autobind
    handleChange() {
        let { onChange, text } = this.props;

        if (onChange) {
            onChange(text);
        }
    }
}
export default Radio;

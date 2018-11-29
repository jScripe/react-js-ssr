import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Type from 'prop-types';
import cn from 'cn-decorator';
import './button.scss';

@cn('button')

class Button extends Component {
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
        background: Type.string,
        onClick: Type.func
    }

    static defaultProps = {
        theme: 'default',
        size: 'small',
        side: 'left',
        background: 'visible'
    }

    render(cn) {
        let {
            theme,
            size,
            children,
            background
        } = this.props;

        return (
            <button
                type='button'
                className={ cn({
                    checked: false,
                    theme: `${theme}`,
                    size: `${size}`,
                    background: `${background}`
                }) }
                onClick={ this.handleClick }
            >
                { children }
            </button>
        );
    }

    @autobind
    handleClick(event) {
        let { onClick } = this.props;

        if (onClick) {
            onClick(event);
        }
    }
}
export default Button;

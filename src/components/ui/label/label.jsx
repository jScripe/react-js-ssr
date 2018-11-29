import React, { Component } from 'react';
import './label.scss';
import cn from 'cn-decorator';

import Type from 'prop-types';



@cn('label')
class Label extends Component {
    static propTypes ={
        children: Type.oneOfType([
            Type.string,
            Type.array
        ]),
        theme: Type.oneOf(['dark', 'light', 'secondary', 'date', 'pink', 'results-bar', 'name-of-film-on-card']),
        display: Type.string,
        size: Type.string,
        side: Type.string
    }

    static defaultProps ={
        theme: 'light',
        display: 'default',
        size: 'small'
    }

    render(cn) {
        let {
            children,
            theme,
            display,
            size,
            side
        } = this.props;

        return (
            <p className={
                cn({
                    theme,
                    display,
                    size,
                    side
                }) }
            >
                { children }
            </p>
        );
    }
}
export default Label;

import React, { Component } from 'react';
import Type from 'prop-types';
import './message.scss';
import bemCn from 'bem-cn-fast';

const cn = bemCn('message');

class Message extends Component {
    static propTypes={
        children: Type.string
    }

    render() {
        let { children } = this.props;
        return <div className={ cn() }>{ children }</div>;
    }
}
export default Message;

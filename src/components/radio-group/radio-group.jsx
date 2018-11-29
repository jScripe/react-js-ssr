import autobind from 'core-decorators/lib/autobind';
import React, { Component, Children } from 'react';
import createFragment from 'react-addons-create-fragment';
import Type from 'prop-types';


class RadioGroup extends Component {
    static propTypes = {
        children: Type.arrayOf(
            Type.object
        ),
        onChange: Type.func,
        value: Type.string
    }

    state ={
        value: ''
    }

    render() {
        let { children } = this.props;
        let radioButtons = {};

        if (children) {
            this.radios = [];

            let value = this.props.value;

            Children.forEach(children, (radio, index) => {
                radioButtons[`button-${index}`] = React.cloneElement(radio, {
                    theme: radio.props.value === value
                        ? 'search-bar-extra'
                        : 'default',
                    onChange: this.handleRadioChange
                });
            });
        }

        return (
            <React.Fragment>
                { createFragment(radioButtons) }
            </React.Fragment>
        );
    }

    @autobind
    handleRadioChange(value) {
        let { value: oldStateValue } = this.state;
        if (oldStateValue !== value) {
            this.setState({ value });
        }
        let { value: oldPropsValue, onChange } = this.props;
        if (oldPropsValue !== value && onChange) {
            onChange(value);
        }
    }
}

export default RadioGroup;

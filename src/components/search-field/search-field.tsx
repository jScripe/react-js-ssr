import * as React from 'react';
import './search-field.scss';
import { block } from 'bem-cn';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import Label from '../ui/label/label';

const cn = block('search-field');

interface Istate {
    value:string
}
interface Props extends Istate {
    onChange: (event:any)=>void
}
const mapStateToProps = (state):Istate => ({
    value: state.searchField.value
});

class SearchField extends React.Component<Props> {

    static defaultProps = {
        value: ''
    }

    render() {
        return (
            <React.Fragment>
                <Label>FIND YOUR MOVIE</Label>
                <input
                    className={ cn() }
                    placeholder='search'
                    onChange={ this.handleChange }
                    value={ this.props.value }
                />
            </React.Fragment>
        );
    }

    @autobind
    handleChange(event) {
        let { onChange } = this.props;
        if (onChange) {
            onChange(event);
        }
    }
}

export { SearchField };
export default connect(mapStateToProps)(SearchField);

import React, { Component } from 'react';
import cn from 'cn-decorator';
import './film-card.scss';
import PropTypes from 'prop-types';
import Label from '../ui/label/label';

@cn('film-card')
class FilmCard extends Component {
    static propTypes = {
        imagePath: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.arrayOf(
            PropTypes.string
        ),
        onClick: PropTypes.func,
        releaseDate: PropTypes.string,
        films: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
                PropTypes.array,
                PropTypes.number]),
        ),
        idOfFilm: PropTypes.number
    }

    render(cn) {
        let {
            imagePath,
            title,
            genre,
            releaseDate
        } = this.props;

        let genres = genre.join(',');

        return (
            <div className={ cn() }>
                <div className={ cn('poster-container') }>
                    <img className={ cn('poster') } src={ imagePath } alt='alternative' />
                </div>
                <div className={ cn('label-container') }>
                    <Label theme='name-of-film-on-card'>{ title }</Label>
                    <Label theme='date' className={ cn('label', { side: 'right' }) }>{ releaseDate.slice(0, 4) }</Label>
                    <Label theme='secondary' display='block'>{ genres }</Label>
                </div>
            </div>
        );
    }
}

export default FilmCard;

import './MoviesCard.css';
import poster from '../../images/movie.png';
import React from "react";

function MoviesCard(props) {
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    return (
        <li className="movies__list-item">
            <img src={poster} alt="33 слова о дизайне" className="movies__list-poster"/>
            <div onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut} className="movies__list-description">
                <p className="movies__list-title">Gimme Danger: И</p>

                <button className={props.saved ?
                    `movies__list-delete-button ${isDeleteButtonVisible ? 'movies__list-delete-button_visible' : ''}` :
                    'movies__list-like-button'}></button>
            </div>
            <p className="movies__list-duration">1ч42м</p>
        </li>
        )

}

export default MoviesCard;
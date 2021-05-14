import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import React from "react";

function MoviesCardList(props) {

    return (



        <section className="movies">
            <Preloader isSearching={props.isSearching} />
            <span className={`movies__error ${props.isErrorActive ? '' : 'no-display'}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
            <span className={`movies__not-found ${props.notFound ? '' : 'no-display'}`}>Ничего не найдено</span>
            <span className={`movies__no-saved ${(props.saved && props.movies.length === 0) ? '' : 'no-display'}`}>Вы пока что ничего не добавили в избранное</span>
            <ul className="movies__list">

                {props.movies?.map((movie) => {

                        return (
                            <MoviesCard movie={movie} key={props.saved ? movie.movieId : movie.id} saved={props.saved}
                                        onMovieSave={props.onMovieSave} onDeleteMovie={props.onDeleteMovie}
                                            savedMovies={props.savedMovies}/>
                        )
                    })
                }
            </ul>
            <button className={props.saved ? 'movies__more-button movies__more-button_invisible' : 'movies__more-button'}>Еще</button>
        </section>
    )
}

export default MoviesCardList;
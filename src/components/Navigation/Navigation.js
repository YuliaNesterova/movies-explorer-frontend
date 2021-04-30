import {Link} from "react-router-dom";
import './Navigation.css';
import React from "react";

function Navigation(props) {
    const [isMenuShown, setIsMenuShown] = React.useState(false);

    function handleCloseMenuButtonClick() {
        setIsMenuShown(false);
    }

    function handleOpenMenuButtonClick() {
        setIsMenuShown(true);
    }
    return (
        <div className={props.loggedIn ? 'header__navigation' : 'header__navigation header__navigation_position_right'}>
            <div className={props.loggedIn ? 'header__movies-navigation' : 'header__movies-navigation no-display'}>
                <Link to="/movies" className="header__link header__link_type_movies">Фильмы</Link>
                <Link to="/saved-movies" className="header__link header__link_type_movies">Сохранённые фильмы</Link>
            </div>
            <div className="header__login-navigation">
                <Link to="/signup" className={props.loggedIn ? 'header__link header__link_type_register no-display' :
                    'header__link header__link_type_register'}>Регистрация</Link>
                {props.loggedIn ? <Link to="/profile" className="header__link header__link_type_account">Аккаунт</Link> :
                    <Link to="/signin" className="header__link header__link_type_login">Войти</Link>}
            </div>
            <button className={props.loggedIn ? 'header__burger-button' : 'header__burger-button no-display'} onClick={handleOpenMenuButtonClick}></button>
            <div className={isMenuShown ? 'header__burger-menu visible' : 'header__burger-menu'}>
                <button className="header__burger-menu-close-button" onClick={handleCloseMenuButtonClick}></button>
                <div className={isMenuShown ? 'header__burger-menu-container visible' : 'header__burger-menu-container'}>
                    <div className="header__burger-menu-links">
                        <Link to="/" className="header__burger-menu-link">Главная</Link>
                        <Link to="/movies" className="header__burger-menu-link">Фильмы</Link>
                        <Link to="/saved-movies" className="header__burger-menu-link">Сохранённые фильмы</Link>
                        <Link to="/profile" className="header__burger-menu-link header__burger-menu-link_type_account">Аккаунт</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
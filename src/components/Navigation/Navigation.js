import {Link} from "react-router-dom";
import './Navigation.css';

function Navigation(props) {
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
        </div>
    )
}

export default Navigation;
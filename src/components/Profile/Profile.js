import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import {Link} from "react-router-dom";


function Profile(props) {
    const [isFormDisabled, setIsFormDisabled] = React.useState(true);

    function handleEditProfileClick(e) {
        e.preventDefault();

        setIsFormDisabled(false);
    }

    return (
        <>
            <Header loggedIn={props.loggedIn} />
            <section className="profile">
                <h2 className="profile__title">Привет, Юлия!</h2>
                <form className="profile__form" >
                    <fieldset className="profile__fields">
                        <div className="profile__form-input">
                            <p className="profile__form-input-name">Имя</p>
                            <input type="text" className="profile__form-input-field" placeholder="Юлия" disabled={isFormDisabled}/>
                        </div>
                        <div className="profile__form-input">
                            <p className="profile__form-input-name">Email</p>
                            <input type="text" className="profile__form-input-field" placeholder="email@mail.ru" disabled={isFormDisabled}/>
                        </div>
                    </fieldset>
                    <span className={isFormDisabled ? 'profile__form-error no-display' : 'profile__form-error'}>При обновлении профиля произошла ошибка.</span>
                    {isFormDisabled ? <button className="profile__button profile__button_type_edit" onClick={handleEditProfileClick}>Редактировать</button> :
                        <button className="profile__button profile__button_type_save">Сохранить</button>}
                </form>
                <Link to="/" className={isFormDisabled ? 'profile__signout-link' : 'profile__signout-link no-display'}>Выйти из аккаунта</Link>
            </section>
        </>

    )
}

export default Profile;
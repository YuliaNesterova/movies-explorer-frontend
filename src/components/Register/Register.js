import React from "react";
import {Link, withRouter} from "react-router-dom";
import {useFormWithValidation} from "../../hooks/useForm";

import "./Register.css";
import Logo from "../Logo/Logo";

function Register(props) {
    const {values, handleChange, errors, isFormValid} = useFormWithValidation();

    function handleRegister(e) {
        e.preventDefault();

        props.onRegister(values.name, values.password, values.email);

        props.onClear();
    }

    return (
        <>

        <section className="register">
            <Logo />
            <h2 className="register__title auth__title">Добро пожаловать!</h2>
            <form className="register__form auth__form" onSubmit={handleRegister}>
                <fieldset className="register__fields auth__fields">
                    <p className="register__input-name auth__input-name">Имя</p>
                    <input type="text" name="name" pattern="[а-яА-Яa-zA-ZёË\- ]{1,}" className="register__input auth__input"
                           value={values.name || ''} onChange={handleChange}
                           required disabled={props.isSaving}/>
                    <span className="register__error auth__error">{errors.name}</span>
                    <p className="register__input-name auth__input-name">E-mail</p>
                    <input type="email" name="email" className="register__input auth__input"
                           value={values.email || ''} onChange={handleChange}
                           required disabled={props.isSaving}/>
                    <span className="register__error auth__error">{errors.email}</span>
                    <p className="register__input-name auth__input-name">Пароль</p>
                    <input type="password" name="password" className="register__input auth__input"
                           value={values.password || ''} onChange={handleChange}
                           required minLength="8" disabled={props.isSaving}/>
                    <span className="register__error auth__error">{errors.password}</span>
                </fieldset>
                <span className="register__submit-error auth__submit-error">{props.errorMessage}</span>
                <button disabled={!isFormValid} type="submit"
                        className={`register__submit-button auth__submit-button ${isFormValid ? '': 'auth__submit-button_disabled'}`}>
                    Зарегистрироваться</button>
            </form>
                <h3 className="register__subtitle auth__subtitle">Уже зарегистрированы?
                    <Link className="register__link auth__link" to="/signin" onClick={props.onClear}> Войти</Link></h3>
        </section>
       </>
    )
}

export default withRouter(Register);
import "./Register.css";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";



function Register() {
    return (
        <>

        <section className="register">
            <Logo />
            <h2 className="register__title auth__title">Добро пожаловать!</h2>
            <form className="register__form auth__form">
                <fieldset className="register__fields auth__fields">
                    <p className="register__input-name auth__input-name">Имя</p>
                    <input type="text" className="register__input auth__input" required/>
                    <span className="register__error auth__error"></span>
                    <p className="register__input-name auth__input-name">E-mail</p>
                    <input type="email" className="register__input auth__input" required/>
                    <span className="register__error auth__error"></span>
                    <p className="register__input-name auth__input-name">Пароль</p>
                    <input type="password" className="register__input auth__input" required minLength="8"/>
                    <span className="register__error auth__error">Что-то пошло не так...</span>
                </fieldset>
                <button className="register__submit-button auth__submit-button">Зарегистрироваться</button>
            </form>
                <h3 className="register__subtitle auth__subtitle">Уже зарегистрированы?
                    <Link className="register__link auth__link" to="/signin"> Войти</Link></h3>
        </section>
       </>
    )
}

export default Register;
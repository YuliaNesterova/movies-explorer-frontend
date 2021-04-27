import "./Login.css";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

function Login() {
    return (
        <section className="login">
            <Logo />
            <h2 className="login__title auth__title">Рады видеть!</h2>
            <form className="login__form auth__form">
                <fieldset className="login__fields auth__fields">
                    <p className="login__input-name auth__input-name">E-mail</p>
                    <input type="email" className="login__input auth__input" required/>
                    <span className="login__error auth__error"></span>
                    <p className="login__input-name auth__input-name">Пароль</p>
                    <input type="password" className="login__input auth__input" required minLength="8"/>
                    <span className="login__error auth__error"></span>
                </fieldset>
                <button className="login__submit-button auth__submit-button">Войти</button>
            </form>
                <h3 className="login__subtitle auth__subtitle">Ещё не зарегистрированы?
                    <Link className="login__link auth__link" to="/signup">Регистрация</Link></h3>
        </section>
    )
}

export default Login;
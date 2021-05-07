import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import './Header.css'

function Header(props) {
    return (
        <section className={props.main ? 'header' : 'header header_type_white'}>
            <img className="header__logo" alt="Лого" src={logo}/>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;
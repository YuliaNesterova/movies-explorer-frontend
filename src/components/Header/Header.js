import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <section className={props.main ? 'header' : 'header header_type_white'}>
            <Link to="/"><img className="header__logo" alt="Лого" src={logo}/></Link>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;
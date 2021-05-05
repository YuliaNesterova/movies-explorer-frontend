import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {
    return (
        <img src={logo} alt="Лого" className="logo"/>
    )
}

export default Logo;
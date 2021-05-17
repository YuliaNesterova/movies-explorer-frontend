import './Logo.css';
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to="/"><img src={logo} alt="Лого" className="logo"/></Link>

    )
}

export default Logo;
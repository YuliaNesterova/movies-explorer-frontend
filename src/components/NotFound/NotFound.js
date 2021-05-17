import './NotFound.css';
import {Link, useHistory} from "react-router-dom";

function NotFound() {
    const history = useHistory();

    function handleBackLink() {
        history.goBack()
    }
    return (
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <Link to="" onClick={handleBackLink} className="not-found__link">Назад</Link>
        </section>
    )
}

export default NotFound;
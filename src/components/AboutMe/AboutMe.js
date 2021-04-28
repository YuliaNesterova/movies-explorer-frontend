import student__photo from '../../images/student__photo.jpeg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__heading section__heading">Студент</h2>
            <div className="about-me__description">
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Юлия</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 26 лет</p>
                    <p className="about-me__description-paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                                                   и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                                                                   Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                                                                   После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
                                                                   и ушёл с постоянной работы.</p>
                    <div className="about-me__description-links">
                        <a href="https://www.facebook.com/ydnesterova/" target="_blank" rel="noopener" className="about-me__description-link">Facebook</a>
                        <a href="https://github.com/YuliaNesterova" target="_blank" rel="noopener" className="about-me__description-link">Github</a>
                    </div>
                </div>
                <img src={student__photo} alt="Юлия" className="about-me__description-photo"/>
            </div>
            <h4 className="about-me__portfolio-heading">Портфолио</h4>
            <ul className="about-me__portfolio-links">
                <li className="about-me__portfolio-links-item">
                    <a href="https://yulianesterova.github.io/how-to-learn/" target="_blank" rel="noopener" className="about-me__portfolio-link">Статичный сайт</a>
                </li>
                <li className="about-me__portfolio-links-item">
                    <a href="https://yulianesterova.github.io/russian-travel/" target="_blank" rel="noopener" className="about-me__portfolio-link">Адаптивный сайт</a>
                </li>
                <li className="about-me__portfolio-links-item">
                    <a href="https://mesto.nesterova.students.nomoredomains.icu/" target="_blank" rel="noopener" className="about-me__portfolio-link">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default AboutMe;
import promo from '../../images/promo_image.svg';
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
            <img alt="Фон" className="promo__image" src={promo}/>
        </section>
    )
}

export default Promo;
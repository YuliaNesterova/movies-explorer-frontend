import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";

function Main(props) {
    return (
    <>
       <Header loggedIn={props.loggedIn}/>
       <Promo />
       <AboutProject />
       <Techs />
       <AboutMe />
       <Portfolio />
        <Footer />
    </>

    )
}

export default Main;
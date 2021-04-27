import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (
        <>
            <Header loggedIn={props.loggedIn}/>
            <SearchForm />
            <MoviesCardList saved={true}/>
            <Footer />
        </>
    )
}

export default SavedMovies;
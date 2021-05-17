import './SearchForm.css';
import search__icon from '../../images/search__icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm(props) {
    const [search, setSearch] = React.useState('');
    const [isSearchValid, setIsSearchValid] = React.useState(true);

    function handleSearchChange(e) {
        setSearch(e.target.value);
        setIsSearchValid(e.target.checkValidity())
    }

    function handleSearchSavedMovies(e) {
        e.preventDefault();

        props.onSearchSavedMovies(search);
    }

    function handleSearchMovies(e) {
        e.preventDefault();

        props.onSearchMovies(search);
    }
    return (
        <section className="search">
            <form className="search__form" onSubmit={props.saved ? handleSearchSavedMovies : handleSearchMovies}>
                    <img src={search__icon} alt="Поиск" className="search__icon"/>
                    <fieldset className="search__form-fields">
                        <input type="text" name="search" placeholder="Фильм" className="search__form-input"
                               value={search || ''} onChange={handleSearchChange}
                               required/>
                        <span className={`search__form-error ${isSearchValid ? 'search__form-error_hidden' : ''}`}>Нужно ввести ключевое слово</span>
                    </fieldset>

                    <button className="search__form-button" type="submit"></button>
                    <span className="search__toggle-border"/>
                    <div className="search__toggle-box">
                        <FilterCheckbox onChange={props.onShortMoviesCheck} isChecked={props.isChecked}/>
                        <h3 className="search__toggle-text">Короткометражки</h3>
                    </div>
            </form>
        </section>
    )
}

export default SearchForm;
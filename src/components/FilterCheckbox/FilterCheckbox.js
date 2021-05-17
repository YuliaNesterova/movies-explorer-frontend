import './FilterCheckbox.css';

function FilterCheckbox(props) {

    return (
        <label htmlFor="short-films" className="search__toggle-label">
            <input id="short-films" type="checkbox" className="search__toggle" onChange={props.onChange} checked={props.isChecked}/>
            <span className="search__toggle_visible"></span>
        </label>
    )
}

export default FilterCheckbox;

export default function Searchbar(props) {

    return(
        <input className="search-bar"
            type='search' 
            placeholder='Find a robobuddy'
            onChange={props.handleChange}
        />
    )
}
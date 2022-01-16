import SortBy from "./SortBy";
import Genres from "./Genres";
import Type from "./Type";


const SearchFilter = ({genresAvailable, genres, setGenres, sortBy, setSortBy, type, setType}) => {
    return (
        <div className="search-filter">  
            <Genres genresAvailable={genresAvailable} genres={genres} setGenres={setGenres}/>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
            <Type type={type} setType={setType}/>
        </div>
    )
}

export default SearchFilter

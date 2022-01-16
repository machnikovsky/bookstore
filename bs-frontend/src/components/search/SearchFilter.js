import { useEffect } from "react";
import ScoreFilter from "./ScoreFilter";
import SortBy from "./SortBy";
import YearFilter from "./YearFilter";
import Genres from "./Genres";
import Type from "./Type";


const SearchFilter = ({genresAvailable, genres, setGenres, sortBy, setSortBy, type, setType}) => {
    return (
        <div className="search-filter">  
            <Genres genresAvailable={genresAvailable} genres={genres} setGenres={setGenres}/>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
            <Type type={type} setType={setType}/>
            {/*<YearFilter filters={filters} setFilters={setFilters} type={type}/>*/}
            {/*<ScoreFilter filters={filters} setFilters={setFilters} />*/}
        </div>
    )
}

export default SearchFilter

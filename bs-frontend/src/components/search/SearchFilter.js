import { useEffect } from "react";
import ScoreFilter from "./ScoreFilter";
import SortBy from "./SortBy";
import YearFilter from "./YearFilter";
import Genres from "./Genres";
import Type from "./Type";


const SearchFilter = ({genresAvailable, genres, setGenres, sortBy, setSortBy, type, setType}) => {

    const addFilter = (type, value) => {
        // let copiedMap = new Map(filters);
        //
        // if (copiedMap.has(type)) {
        //     if (copiedMap.get(type).includes(value)) {
        //         let updatedList = copiedMap.get(type).slice()
        //         updatedList = updatedList.filter(e => e !== value);
        //         if (updatedList.length > 0) {
        //             copiedMap.set(type, updatedList);
        //         } else {
        //             copiedMap.delete(type);
        //         }
        //     } else {
        //         let updatedList = copiedMap.get(type).slice()
        //         updatedList.push(value)
        //         copiedMap.set(type, updatedList)
        //     }
        // } else {
        //     copiedMap.set(type, [value])
        // }
        //
        // setFilters(copiedMap);
        // console.log("After: ", copiedMap);
    }


    // useEffect(() => {
    //     setFilters(filters)
    // }, [filters, setFilters])

    // useEffect(() => {
    //     console.log("Filters from here: ", getFilters());
    // }, []);

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

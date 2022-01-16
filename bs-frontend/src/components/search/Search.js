import { useState, useEffect } from "react";
import BookList from "../books/BookList";
import SearchBar from "./SearchBar";
import SearchUtil from '../../api/GetAndSetUtil';
import SearchFilter from "./SearchFilter";
import {useLocation} from "react-router-dom";
import GetAndSetUtil from "../../api/GetAndSetUtil";

const Search = () => {

    const [bookList, setBookList] = useState([]);
    const [genresAvailable, setGenresAvailable] = useState([]);

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [firstRender, setFirstRender] = useState(true);
    const [type, setType] = useState('');

    const location = useLocation()
    const genre = location.state?.genre

    useEffect(() => {
        GetAndSetUtil.getAndSetGenres(setGenresAvailable);

        if (genre) {
            setGenres([genre]);
        } else {
            SearchUtil.getAndSetAllIssues(setBookList);
        }
        setFirstRender(false);
    }, [])

    useEffect(() => {
        if (!firstRender) {
            SearchUtil.getAndSetFilteredList(getFilters(), setBookList);
        }
    }, [query, genres, sortBy, type])

    const getFilters = () => {
        let filters = {};
        if (query !== '') {
            filters['query'] = query;
        }
        if (genres.length > 0) {
            filters['genres'] = genres;
        }
        if (sortBy !== '') {
            filters['sort_by'] = sortBy;
        }
        if (type !== '') {
            filters['type'] = type;
        }
        console.log("Filters: ", filters);
        return filters;
    }


    // useEffect(() => {
    //     SearchUtil.getAndSetQueriedListWithNewPage(query, bookList, setBookList, page);
    //     //TODO: Implement loading new page on click
    // }, [page])



    return (
        <div className="books-container">
            <div className="search-container">
                <SearchBar setQuery={setQuery}/>
                {
                    genres &&
                    <SearchFilter
                        genresAvailable={genresAvailable}
                        genres={genres} setGenres={setGenres}
                        sortBy={sortBy} setSortBy={setSortBy}
                        type={type} setType={setType}
                    />
                }

            </div>
            <BookList bookList={bookList}/>
            <button className="more-button" onClick={() => setPage(page + 1)}>Więcej</button>
        </div>
    );
}

export default Search;
import { useState, useEffect } from "react";
import BookList from "../books/BookList";
import SearchBar from "./SearchBar";
import SearchUtil from '../../api/GetAndSetUtil';

const Search = () => {

    const [bookList, setBookList] = useState([]);
    const [query, setQuery] = useState('a');
    const [page, setPage] = useState(1);


    useEffect(() => {
        SearchUtil.getAndSetAllIssues(setBookList);
        console.log('Book list :', bookList);
    }, [])


    useEffect(() => {
        SearchUtil.getAndSetQueriedListWithNewQuery(query, setBookList);

    }, [query])

    // useEffect(() => {
    //     SearchUtil.getAndSetQueriedListWithNewPage(query, bookList, setBookList, page);
    // TODO: Implement loading new page on click
    // }, [page])



    return (
        <div className="books-container">
            <div className="search-container">
                <SearchBar setQuery={setQuery}/>
            </div>
            <BookList bookList={bookList}/>
            <button className="more-button" onClick={() => setPage(page + 1)}>Więcej</button>
        </div>
    );
}

export default Search;
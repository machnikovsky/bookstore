import { useState, useEffect } from "react";
import PictureList from "../pictures/PictureList";
import SearchFilter from "./SearchFilter";
import GetAndSetUtil from '../../api/GetAndSetUtil';
import { useLocation } from "react-router-dom";

const Filter = () => {
    const [pictureList, setPictureList] = useState([]);
    const [genres, setGenres] = useState([]);
    const [filters, setFilters] = useState(new Map());
    const [page, setPage] = useState(1);
    const [firstRender, setFirstRender] = useState(true);
    const [type, setType] = useState('movie');

    const location = useLocation()
    const genre = location.state?.genre


    useEffect(() => {
        // if (!firstRender) {
        //     GetAndSetUtil.getAndSetFilteredListWithNewPage(filters, pictureList, setPictureList, page, type);
        // }
    }, [page])

    useEffect(() => {
        // if (!firstRender) {
        //     GetAndSetUtil.getAndSetFilteredListWithNewFilterOrType(filters, setPictureList, type);
        // }
    }, [filters])

    useEffect(() => {
        // if (!firstRender) {
        //     setFilters(new Map());
        //     GetAndSetUtil.getAndSetFilteredListWithNewFilterOrType(new Map(), setPictureList, type);
        //     GetAndSetUtil.getAndSetGenres(setGenres, type);
        // }
    }, [type])


    useEffect(() => {
        if (genre) {
            setFilters(new Map().set('GENRES', [genre]))
        }
        GetAndSetUtil.getAndSetGenres(setGenres, type);
        GetAndSetUtil.getAndSetFilteredListWithNewFilterOrType(filters, setPictureList, type);
        setFirstRender(false);
    }, [])


    return (
        <div className="movies-container">
            <div className="search-container">
                <SearchFilter
                genres={genres}
                filters={filters} setFilters={setFilters}
                type={type} setType={setType}
                />
            </div>
            <PictureList pictureList={pictureList} type={type}/>
            <button className="more-button" onClick={() => setPage(page + 1)}>Więcej</button>
        </div>
    );
}

export default Filter

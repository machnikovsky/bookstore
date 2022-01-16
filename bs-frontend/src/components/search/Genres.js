const Genres = ({genresAvailable, genres, setGenres}) => {

    const addGenre = (val) => {
        let updatedList = genres.slice()
        if (genres.includes(val)) {
            updatedList = updatedList.filter(e => e !== val);
        } else {
            updatedList.push(val);
        }
        setGenres(updatedList);
    }

    return (
        <div className="filter genre">
            <h2>Gatunek</h2>
            {genresAvailable && (genresAvailable.map((val, idx) => (
                <div key={idx} className={genres.includes(val) ? "single-filter enabled" : "single-filter"}>
                    <button onClick={() => addGenre(val)}>{val}</button>
                </div>
            )))}
        </div>
    )
}

export default Genres

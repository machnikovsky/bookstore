const Type = ({type, setType}) => {
    return(
        <div className="filter type">
            <h2>Rodzaj</h2>
            <div
                className={type === "movie" ? "single-filter enabled" : "single-filter"}
                onClick={() => setType("movie")}>
                Film
            </div>
            <div
                className={type === "tv" ? "single-filter enabled" : "single-filter"}
                onClick={() => setType("tv")}>
                Serial
            </div>
        </div>
    );
}

export default Type;
const Type = ({type, setType}) => {

    const changeTypeFilter = (value) => {
        if (type !== value) {
            setType(value);
        } else {
            setType('');
        }
    }

    return(
        <div className="filter type">
            <h2>Rodzaj</h2>
            <div
                className={type === "book" ? "single-filter enabled" : "single-filter"}
                onClick={() => changeTypeFilter("book")}>
                Książka
            </div>
            <div
                className={type === "ebook" ? "single-filter enabled" : "single-filter"}
                onClick={() => changeTypeFilter("ebook")}>
                Ebook
            </div>
            <div
                className={type === "audiobook" ? "single-filter enabled" : "single-filter"}
                onClick={() => changeTypeFilter("audiobook")}>
                Audiobook
            </div>
        </div>
    );
}

export default Type;
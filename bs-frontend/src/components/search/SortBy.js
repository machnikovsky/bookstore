import React from 'react'

const SortBy = ({sortBy, setSortBy}) => {

    const vote_average_desc = `vote_average.desc`;
    const vote_average_asc = `vote_average.asc`;
    const price_desc = `price.desc`;
    const price_asc = `price.asc`;
    const release_desc = `published_date.desc`;
    const release_asc = `published_date.asc`;
    
    const sort_param = `sort_by`;

    const addScoreFilter = (value) => {
        if (sortBy !== value) {
            setSortBy(value);
        } else {
            setSortBy('');
        }
    }


    return (
        <div className="filter sort">
                <h2>Sortuj według</h2>
                <div className={ sortBy === vote_average_desc ? "single-filter enabled" : "single-filter"}>
                        <button onClick={() => addScoreFilter(vote_average_desc)}>Ocena malejąco</button>
                </div>
                <div className={ sortBy === vote_average_asc ? "single-filter enabled" : "single-filter"}>
                        <button onClick={() => addScoreFilter(vote_average_asc)}>Ocena rosnąco</button>
                </div>
                <div className={ sortBy === price_desc ? "single-filter enabled" : "single-filter"}>
                        <button onClick={() => addScoreFilter(price_desc)}>Cena malejąco</button>
                </div>
                <div className={ sortBy === price_asc ? "single-filter enabled" : "single-filter"}>
                        <button onClick={() => addScoreFilter(price_asc)}>Cena rosnąco</button>
                </div>
                <div className={ sortBy === release_desc ? "single-filter enabled" : "single-filter"}>
                        <button onClick={() => addScoreFilter(release_desc)}>Data malejąco</button>
                </div>
                <div className={ sortBy === release_asc ? "single-filter enabled" : "single-filter"}>
                        <button onClick={() => addScoreFilter(release_asc)}>Data rosnąco</button>
                </div>
            </div>
    )
}

export default SortBy

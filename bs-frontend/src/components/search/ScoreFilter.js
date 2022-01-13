import React from 'react'

const ScoreFilter = ({filters, setFilters, type}) => {

    const gte_type = `vote_average.gte`;

    const addScoreFilter = (gte) => {
        let copiedMap = new Map(filters);
        if (copiedMap.has(gte_type) && copiedMap.get(gte_type).includes(gte)) {
            copiedMap.delete(gte_type);
        } else {
            copiedMap.set(gte_type, Array.of(gte))
        }
        setFilters(copiedMap);
    }


    return (
        <div className="filter score">
                <h2>Oceny</h2>
                <div className={filters.has(gte_type) ? (filters.get(gte_type).includes(9) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addScoreFilter(9)}>9.0+</button>
                </div>
                <div className={filters.has(gte_type) ? (filters.get(gte_type).includes(8) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addScoreFilter(8)}>8.0+</button>
                </div>
                <div className={filters.has(gte_type) ? (filters.get(gte_type).includes(7) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addScoreFilter(7)}>7.0+</button>
                </div>
                <div className={filters.has(gte_type) ? (filters.get(gte_type).includes(6) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addScoreFilter(6)}>6.0+</button>
                </div>
                <div className={filters.has(gte_type) ? (filters.get(gte_type).includes(5) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addScoreFilter(5)}>5.0+</button>
                </div>
                <div className={filters.has(gte_type) ? (filters.get(gte_type).includes(4) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addScoreFilter(4)}>4.0+</button>
                </div>




            </div>
    )
}

export default ScoreFilter

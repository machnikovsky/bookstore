import React from 'react'

const YearFilter = ({filters, setFilters, type}) => {

    const release_date_name = type === "movie" ? "release_date" : "first_air_date";

    const addReleaseTimeFilters = (gte, lte) => {
        let copiedMap = new Map(filters);
        const gte_type = `${release_date_name}.gte`;
        const lte_type = `${release_date_name}.lte`;

        if (gte === null && copiedMap.has(lte_type) && copiedMap.get(lte_type).includes(lte)) {
            copiedMap.delete(lte_type);
        } else if (lte === null && copiedMap.has(gte_type) && copiedMap.get(gte_type).includes(gte)) {
            copiedMap.delete(gte_type);
        } else if (
            copiedMap.has(gte_type) && copiedMap.get(gte_type).includes(gte) &&
            copiedMap.has(lte_type) && copiedMap.get(lte_type).includes(lte)
        ) {
            copiedMap.delete(lte_type);
            copiedMap.delete(gte_type);
        } else {
            if (copiedMap.has(gte_type)) {
                copiedMap.delete(gte_type);
            }
            if (copiedMap.has(lte_type)) {
                copiedMap.delete(lte_type);
            }
            if (gte !== null) {
                copiedMap.set(gte_type, Array.of(gte))
            }
            if (lte !== null) {
                copiedMap.set(lte_type, Array.of(lte))
            }
        }

        setFilters(copiedMap);
    }


    return (
        <div className="filter year">
                <h2>Rok produkcji</h2>
                <div className={filters.has(`${release_date_name}.gte`) ? (filters.get(`${release_date_name}.gte`).includes(2020) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(2020, null)}>2020 - Teraz</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(2010) && (filters.get(`${release_date_name}.lte`).includes(2019)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(2010, 2019)}>2010 - 2019</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(2000) && (filters.get(`${release_date_name}.lte`).includes(2009)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(2000, 2009)}>2000 - 2009</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1990) && (filters.get(`${release_date_name}.lte`).includes(1999)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1990, 1999)}>1990 - 1999</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1980) && (filters.get(`${release_date_name}.lte`).includes(1989)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1980, 1989)}>1980 - 1989</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1970) && (filters.get(`${release_date_name}.lte`).includes(1979)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1970, 1979)}>1970 - 1979</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1960) && (filters.get(`${release_date_name}.lte`).includes(1969)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1960, 1969)}>1960 - 1969</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1950) && (filters.get(`${release_date_name}.lte`).includes(1959)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1950, 1959)}>1950 - 1959</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1940) && (filters.get(`${release_date_name}.lte`).includes(1949)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1940, 1949)}>1940 - 1949</button>
                </div>
                <div className={
                    (filters.has(`${release_date_name}.gte`) && filters.has(`${release_date_name}.lte`)) ? 
                    ((filters.get(`${release_date_name}.gte`).includes(1930) && (filters.get(`${release_date_name}.lte`).includes(1939)) ? "single-filter enabled" : "single-filter")) : 
                    "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(1930, 1939)}>1930 - 1939</button>
                </div>                
                <div className={filters.has(`${release_date_name}.lte`) ? (filters.get(`${release_date_name}.lte`).includes(1929) ? "single-filter enabled" : "single-filter") : "single-filter"}>
                        <button onClick={() => addReleaseTimeFilters(null, 1929)}>? - 1929</button>
                </div>
            </div>
    )
}

export default YearFilter

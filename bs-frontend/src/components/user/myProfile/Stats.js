import React, { useEffect, useState } from 'react'
import ApiCall from '../../../api/ApiCall';

const Stats = () => {

    const [userStats, setUserStats] = useState(null);

    
    useEffect(() => {
        ApiCall.getUserStats()
        .then(res => {
            return res.data;
         })
        .then(data => {
            setUserStats(data);
        })
        .catch(e => {
            console.log("Error: ", e);
        });
    }, [])

    return (
        <div className="single-option stats">
        User stats
        { userStats && 
        <div className="stats-list">
            <div className="single-stat"><div>Przeczytane ksiązki</div> <div>{ userStats.books }</div></div>
            </div>
        }
        </div>
    )
}

export default Stats

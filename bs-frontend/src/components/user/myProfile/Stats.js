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
            <div className="single-stat"><div>Obejrzane Filmy:</div> <div>{ userStats.movies }</div></div>
            <div className="single-stat"><div>Obejrzane Seriale:</div> <div>{ userStats.tv }</div></div>
            <div className="single-stat"><div>Godziny oglądania:</div> <div>{ userStats.time }</div></div>
            </div>
        }
        </div>
    )
}

export default Stats

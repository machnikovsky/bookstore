import React, {useEffect, useState} from 'react'
import ApiCall from '../../../api/ApiCall';

const Stats = ({type}) => {

    const [userStats, setUserStats] = useState(null);
    const [bookstoreStats, setBookstoreStats] = useState(null);


    useEffect(() => {
        if (type === 'user') {
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
        }
        if (type === 'bookstore') {
            ApiCall.getBookstoreStats()
                .then(res => {
                    return res.data;
                })
                .then(data => {
                    setBookstoreStats(data);
                })
                .catch(e => {
                    console.log("Error: ", e);
                });
        }
    }, [])

    return (
        <div className="single-option stats">
            {type === 'user' &&
                <>
                    <div className="header">Twoje statystyki</div>
                    {userStats &&
                        <div className="stats-list">
                            <div className="single-stat">
                                <div>Przeczytane ksiązki</div>
                                <div>{userStats.books}</div>
                            </div>
                            <div className="single-stat">
                                <div>Przeczytane strony</div>
                                <div>{userStats.pages}</div>
                            </div>
                            <div className="single-stat">
                                <div>Średnia ocen</div>
                                <div>{userStats.mean_score}</div>
                            </div>
                        </div>
                    }
                </>
            }
            {type === 'bookstore' &&
                <>
                    <div className="header">Statystyki księgarni</div>
                    {userStats &&
                        <div className="stats-list">
                            <div className="single-stat">
                                <div>Przeczytane ksiązki</div>
                                <div>{bookstoreStats.income}</div>
                            </div>
                            <div className="single-stat">
                                <div>Przeczytane strony</div>
                                <div>{bookstoreStats.sold_books}</div>
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Stats

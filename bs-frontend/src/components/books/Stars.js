import React, { useState } from 'react';
import empty_star from '../../assets/icons/empty_star.png';
import filled_star from '../../assets/icons/filled_star.png';


const Stars = ({setScore, onlyDisplay, readScore}) => {


    const [stars, setStars] = useState(0);
    const handleButton = (e, score) => {
        e.preventDefault();
        if (score === stars) {
            score = 0;
        }
        setStars(score);
        setScore(score);
    }

    return (
        <div className="stars">
            {[...Array(10)].map((_, idx) => (
                <div className="star" key={ idx }>
                    {(onlyDisplay ? idx < readScore : idx < stars) ?
                        onlyDisplay ? <img src={ filled_star } alt="book"/> : <button onClick={(e) => handleButton(e, idx + 1)}><img src={ filled_star } alt="book"/></button> :
                        onlyDisplay ? <img src={ empty_star } alt="book"/>  : <button onClick={(e) => handleButton(e, idx + 1)}><img src={ empty_star } alt="book"/></button>
                    }
                    
                </div>
            ))}
        </div>
    )
}

export default Stars

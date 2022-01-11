import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ApiCall from '../../api/ApiCall';
import star from '../../assets/icons/star.png';
import user_icon from '../../assets/icons/user.png';
import date from '../../assets/icons/date.png';
import type from '../../assets/icons/type.png';
import s from '../../assets/icons/s.png';


import not_found from '../../assets/other/404-image-not-found.jpg';
import UserContext from '../UserContext';
import GetAndSetUtil from '../../api/GetAndSetUtil';
import * as Scroll from 'react-scroll';
import Stars from './Stars';

const SingleTvShow = () => {
    
    const { id } = useParams();
    const {user, setUser} = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const [tv, setTv] = useState(null);
    const [isWatched, setIsWatched] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [buttonText, setButtonText] = useState('Dodaj do obejrzanych');
    const [showForm, setShowForm] = useState(false);
    const [score, setScore] = useState(null);
    const [review, setReview] = useState(null);
    const [addedReview, setAddedReview] = useState(0);
    const scroll = Scroll.animateScroll;
    const navigate = useNavigate();

    useEffect(() => {

        GetAndSetUtil.getAndSetSinglePicture(id, setTv, 'tv');
        GetAndSetUtil.getAndSetReviews(id, setReviews, 'tv');
        GetAndSetUtil.getAndSetWatched('tv', user, id, setIsWatched)
            .then(watched => {
                if (watched) {
                    GetAndSetUtil.getAndSetScoreAndReview('tv', user, id, setScore, setReview);
                }
            })

        if (id) {
            ApiCall.getUserInfo(user)
            .then(res => {
                return res.data;
             })
            .then(data => {
                setUserInfo(data);
            })
            .catch(e => {
                setUserInfo(null);
                setUser(null);
                navigate('/logout');
            });
        }
    }, [])

    useEffect(() => {
        GetAndSetUtil.getAndSetReviews(id, setReviews, 'tv');
    }, [addedReview])

    const handleAddToWatchedButton = (e) => {
        e.preventDefault();
        if (showForm) {
            scroll.scrollToTop();
            setButtonText('Dodaj do obejrzanych')
            setShowForm(false);
        } else {
            scroll.scrollTo(500);
            setButtonText('Anuluj');
            setShowForm(true);
        }
    }

    const handleAddToWatched = async (e) => {
        e.preventDefault();
        let watchedMovieReview = {
            'username': user,
            'tvId': id
        }

        if (score !== 0) {
            watchedMovieReview['score'] = score;
        }

        if (review !== '') {
            watchedMovieReview['review'] = review;
        }

        await ApiCall.addToWatched(watchedMovieReview, 'tv');
        setAddedReview(addedReview + 1);
        setIsWatched(true);
        scroll.scrollToBottom();

    }


    const getProperSeasonForm = (number) => {
        if (number < 2) {
            return number + ' sezon';
        } else if (number < 5) {
            return number + ' sezony';
        } else {
            return number + ' sezonów';
        }
    }


    return (
        <>
            {tv &&
                <div className="single-movie-page-container">
                    <div className="poster-and-info-container">
                        <div className="top-movie-background">
                            <img 
                                src={ `https://image.tmdb.org/t/p/original/${tv.backdrop_path}` } 
                                className="background"
                                alt="movie"/> 
                        </div>
                        
                        <div className="poster-container">
                            <img 
                            src={ `https://image.tmdb.org/t/p/original/${tv.poster_path}` } 
                            onError={(event) => event.target.setAttribute("src", not_found)} 
                            className="poster" 
                            alt="movie"/>
                        </div>
                        <div className="movie-info">
                            <div className="movie-title">{ tv.name }</div>
                                <div className="movie-stats">
                                    <div className="stat">
                                            <img src={ star } alt="movie"/>
                                        <div className="value">{ tv.vote_average}</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ s } alt="movie"/>
                                        <div className="value"> { getProperSeasonForm(tv.number_of_seasons) }</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ date } alt="movie"/>
                                        <div className="value">{ tv.first_air_date.substring(0, 4)}</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ type } alt="movie"/>
                                        <div className="value">{ tv.genres[0].name}</div>
                                    </div>
                                </div>
                                <div className="overview">{ tv.overview }</div>
                                { user && !isWatched && <button className="add-to-watched" onClick={handleAddToWatchedButton}>{buttonText}</button> }
                                
                        </div>
                    </div>
                    {showForm && !isWatched &&
                        <div className="add-form">
                            <form>
                                <label>Twoja ocena:</label>
                                <Stars setScore={setScore} onlyDisplay={false}/>
                                <label>Recenzja:</label>
                                <textarea 
                                    className="review-input"
                                    value={review}
                                    onChange={e => setReview(e.target.value)}
                                />
                                <button className="add-review-button" onClick={handleAddToWatched}> Dodaj </button>
                            </form>
                        </div>
                    }
                    {isWatched &&
                        <div className="watched">
                            <p>Obejrzałeś już ten film.</p>
                            <p>Twoja ocena:</p>
                            {score > 0 ?
                                <Stars
                                    setScore={setScore}
                                    onlyDisplay={true}
                                    watchedScore={score}
                                />
                                :
                                'Brak oceny'
                            }
                            <p>Twoja recenzja:</p>
                            <div className="review-output">
                                { review ?
                                    review
                                    :
                                    'Brak recenzji'
                                }
                            </div>
                        </div>
                    }
                    <div className="reviews">
                        <h2>Recenzje użytkowników</h2>
                        { reviews && (
                            reviews.map((val, idx) => (
                                <div className="review" key={idx}>
                                    <div className="review-part">
                                        <img src={ user_icon } alt="user"/>
                                        <div className="username">{val.user.username}</div>
                                    </div>
                                    <div className="review-part">{val.review} </div>
                                    <div className="review-part">
                                        <img src={ star } alt="movie"/>
                                        <div className="score">
                                            {val.score ? `${val.score} / 10` : '-'}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            }

        </>
    )
}

export default SingleTvShow

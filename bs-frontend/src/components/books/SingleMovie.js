import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ApiCall from '../../api/ApiCall';
import GetAndSetUtil from '../../api/GetAndSetUtil';
import star from '../../assets/icons/star.png';
import runtime from '../../assets/icons/runtime.png';
import user_icon from '../../assets/icons/user.png';
import date from '../../assets/icons/date.png';
import type from '../../assets/icons/type.png';
import not_found from '../../assets/other/404-image-not-found.jpg';
import UserContext from '../UserContext';
import * as Scroll from 'react-scroll';
import Stars from './Stars';


const SingleMovie = () => {

    const { id } = useParams();
    const {user, setUser} = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const [movie, setMovie] = useState(null);
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


        GetAndSetUtil.getAndSetSinglePicture(id, setMovie, 'movie');
        GetAndSetUtil.getAndSetReviews(id, setReviews, 'movie');
        GetAndSetUtil.getAndSetWatched('movie', user, id, setIsWatched)
            .then(watched => {
                if (watched) {
                    GetAndSetUtil.getAndSetScoreAndReview('movie', user, id, setScore, setReview);
                }
            })


        if (user) {
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
        GetAndSetUtil.getAndSetReviews(id, setReviews, 'movie');
    }, [addedReview])

    const handleAddToWatchedButton = (e) => {
        e.preventDefault();
        if (showForm) {
            scroll.scrollToTop();
            setButtonText('Dodaj do obejrzanych')
            setShowForm(false);
        } else {
            scroll.scrollTo(500);
            setButtonText('Anuluj')
            setShowForm(true);
        }
    }

    const handleAddToWatched = async (e) => {
        e.preventDefault();
        let watchedMovieReview = {
            'username': user,
            'movieId': id
        }

        if (score !== 0) {
            watchedMovieReview['score'] = score;
        }

        if (review !== '') {
            watchedMovieReview['review'] = review;
        }

        await ApiCall.addToWatched(watchedMovieReview, 'movie');
        setAddedReview(addedReview + 1);
        setIsWatched(true);
        scroll.scrollToBottom();
    }
    

    return (
        <>
            {movie &&
                <div className="single-movie-page-container">
                    <div className="poster-and-info-container">
                        <div className="top-movie-background">
                            <img 
                                src={ `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` } 
                                className="background"
                                alt="movie"/> 
                        </div>
                        
                        <div className="poster-container">
                            <img 
                            src={ `https://image.tmdb.org/t/p/original/${movie.poster_path}` } 
                            onError={(event) => event.target.setAttribute("src", not_found)} 
                            className="poster" 
                            alt="movie"/>
                        </div>
                        <div className="movie-info">
                            <div className="movie-title">{ movie.title }</div>
                                <div className="movie-stats">
                                    <div className="stat">
                                            <img src={ star } alt="movie"/>
                                        <div className="value">{ movie.vote_average}</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ runtime } alt="movie"/>
                                        <div className="value">{ movie.runtime} min</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ date } alt="movie"/>
                                        <div className="value">{ movie.release_date.substring(0, 4)}</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ type } alt="movie"/>
                                        <div className="value">{ movie.genres[0].name}</div>
                                    </div>
                                </div>
                                <div className="overview">{ movie.overview }</div>
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

export default SingleMovie

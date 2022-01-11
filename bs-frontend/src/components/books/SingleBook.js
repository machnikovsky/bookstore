import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ApiCall from '../../api/ApiCall';
import GetAndSetUtil from '../../api/GetAndSetUtil';
import star from '../../assets/icons/star.png';
import page_icon from '../../assets/icons/page_icon.png';
import user_icon from '../../assets/icons/user.png';
import date from '../../assets/icons/date.png';
import type_icon from '../../assets/icons/type.png';
import not_found from '../../assets/other/404-image-not-found.jpg';
import UserContext from '../../auth/UserContext';
import * as Scroll from 'react-scroll';
import Stars from './Stars';


const SingleBook = ({type}) => {

    const { id } = useParams();
    const {user, setUser} = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const [book, setBook] = useState(null);
    const [isRead, setIsRead] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [buttonText, setButtonText] = useState('Dodaj do obejrzanych');
    const [showForm, setShowForm] = useState(false);
    const [score, setScore] = useState(null);
    const [review, setReview] = useState(null);
    const [addedReview, setAddedReview] = useState(0);
    const scroll = Scroll.animateScroll;
    const navigate = useNavigate();



    useEffect(() => {


        GetAndSetUtil.getAndSetSingleIssue(id, setBook);


        // GetAndSetUtil.getAndSetReviews(id, setReviews, 'book');
        // GetAndSetUtil.getAndSetWatched('book', user, id, setIsRead)
        //     .then(watched => {
        //         if (watched) {
        //             GetAndSetUtil.getAndSetScoreAndReview('book', user, id, setScore, setReview);
        //         }
        //     })


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
        GetAndSetUtil.getAndSetReviews(id, setReviews, 'book');
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

        await ApiCall.addToWatched(watchedMovieReview, 'book');
        setAddedReview(addedReview + 1);
        setIsRead(true);
        scroll.scrollToBottom();
    }
    

    return (
        <>
            {book &&
                <div className="single-movie-page-container">
                    <div className="poster-and-info-container">
                        <div className="top-movie-background">
                            <img 
                                src={ book.background_url }
                                className="background"
                                alt="movie"/> 
                        </div>
                        
                        <div className="poster-container">
                            <img 
                            src={ book.image_url }
                            onError={(event) => event.target.setAttribute("src", not_found)} 
                            className="poster" 
                            alt="movie"/>
                        </div>
                        <div className="movie-info">
                            <div className="movie-title">{ book.title }</div>
                                <div className="movie-stats">
                                    <div className="stat">
                                            <img src={ star } alt="movie"/>
                                        <div className="value">{ book.mean_score}</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ page_icon } alt="movie"/>
                                        <div className="value">{ book.number_of_pages} stron</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ date } alt="movie"/>
                                        <div className="value">{ book.original_publication_year }</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ type_icon } alt="movie"/>
                                        <div className="value">{ book.genre }</div>
                                    </div>
                                </div>
                                <div className="overview">{ book.description }</div>
                                { user && !isRead && <button className="add-to-watched" onClick={handleAddToWatchedButton}>{buttonText}</button> }
                                
                        </div>
                    </div>
                    {showForm && !isRead &&
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
                    {isRead &&
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

export default SingleBook

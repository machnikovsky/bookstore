import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
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

    const {bookId, issueId } = useParams();
    const {user, setUser} = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const [book, setBook] = useState(null);
    const [isRead, setIsRead] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [buttonText, setButtonText] = useState('Oceń książkę');
    const [showForm, setShowForm] = useState(false);
    const [score, setScore] = useState(null);
    const [review, setReview] = useState(null);
    const [addedReview, setAddedReview] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const [sold, setSold] = useState(0);
    const [ordered, setOrdered] = useState(0);
    const [addedToCart, setAddedToCart] = useState(0);
    const [roles, setRoles] = useState([]);
    const scroll = Scroll.animateScroll;
    const navigate = useNavigate();



    useEffect(() => {

        GetAndSetUtil.getAndSetSingleIssue(issueId, setBook);
        GetAndSetUtil.getAndSetReviews(bookId, setReviews);
        GetAndSetUtil.getAndSetUserRoles(user, setRoles);

        GetAndSetUtil.getAndSetIsRead(bookId, setIsRead)
            .then(read => {
                if (read) {
                    GetAndSetUtil.getAndSetScoreAndReview(bookId, setScore, setReview);
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
        GetAndSetUtil.getAndSetReviews(bookId, setReviews);
    }, [addedReview])

    useEffect(() => {
        GetAndSetUtil.getAndSetIsIssueAvailable(issueId, setIsAvailable);
    }, [sold, ordered, addedToCart])


    const handleShowReviewFormButton = (e) => {
        e.preventDefault();
        if (showForm) {
            scroll.scrollToTop();
            setButtonText('Oceń książkę')
            setShowForm(false);
        } else {
            scroll.scrollTo(500);
            setButtonText('Anuluj')
            setShowForm(true);
        }
    }

    const handleAddToRead = async (e) => {
        e.preventDefault();
        let bookRating = {
            'username': user,
            'book_id': bookId
        }

        if (score !== 0) {
            bookRating['score'] = score;
        }

        if (review !== '') {
            bookRating['review'] = review;
        }

        await ApiCall.addRating(bookRating)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                const recievedRating = {
                    'username': data.username,
                    'book_id': data.book_id,
                    'review': review,
                    'score': score
                }
                let slice = reviews.slice();
                slice.push(recievedRating)
                setReviews(slice);
            })
            .catch((err) => {
                console.log("Error: ", err.response);
            });

        setAddedReview(addedReview + 1);
        setIsRead(true);
        scroll.scrollToBottom();
    }

    const handleAddToCart = async (e) => {
        e.preventDefault();
        GetAndSetUtil.addToCartAndIncrementCart(issueId, addedToCart, setAddedToCart);
    }

    const handleSellStationary = (e) => {
        e.preventDefault();
        GetAndSetUtil.sellBookAndIncrementSold(issueId, sold, setSold);
    }

    const handleOrderIssue = (e) => {
        e.preventDefault();
        GetAndSetUtil.orderBookAndIncrementOrdered(issueId, ordered, setOrdered);
    }
    

    return (
        <>
            {book &&
                <div className="single-book-page-container">
                    <div className="poster-and-info-container">
                        <div className="top-book-background">
                            <img 
                                src={ book.background_url }
                                className="background"
                                alt="book"/> 
                        </div>
                        
                        <div className="poster-container">
                            <img 
                            src={ book.image_url }
                            onError={(event) => event.target.setAttribute("src", not_found)} 
                            className="poster" 
                            alt="book"/>
                        </div>
                        <div className="book-info">
                            <div className="book-title">{ book.title }</div>
                                <div className="book-stats">
                                    <div className="stat">
                                            <img src={ star } alt="book"/>
                                        <div className="value">{ book.mean_score}</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ page_icon } alt="book"/>
                                        <div className="value">{ book.book_type !== "AUDIOBOOK" ? `${book.number_of_pages} stron` : "Audiobook"} </div>
                                    </div>
                                    <div className="stat">
                                        <img src={ date } alt="book"/>
                                        <div className="value">{ book.original_publication_year }</div>
                                    </div>
                                    <div className="stat">
                                        <img src={ type_icon } alt="book"/>
                                        <div className="value">{ book.genre }</div>
                                    </div>
                                </div>
                                <div className="overview">{ book.description }</div>
                                <div className="single-book-buttons">
                                    { user && roles.includes('USER') && !isRead && <button className="single-book-button" onClick={handleShowReviewFormButton}>{buttonText}</button> }
                                    { user && roles.includes('USER') && ( isAvailable ?
                                            <button className="single-book-button green-bg" onClick={handleAddToCart}>Dodaj do koszyka</button> :
                                            <button className="single-book-button red-bg">Niedostępne</button> )
                                    }
                                    { user && roles.includes('WORKER') && ( isAvailable ?
                                        <button className="single-book-button green-bg" onClick={handleSellStationary}>Sprzedaj stacjonarnie</button> :
                                        <button className="single-book-button red-bg">Niedostępne</button> )
                                    }
                                    { user && roles.includes('WORKER') && <button className="single-book-button" onClick={handleOrderIssue}>Zamów</button> }
                                </div>

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
                                    <button className="add-review-button" onClick={handleAddToRead}> Dodaj </button>
                                </form>
                            </div>
                    }
                    {isRead &&
                        <div className="read">
                            <p>Przeczytałeś już te książkę.</p>
                            <p>Twoja ocena:</p>
                            {score > 0 ?
                                <Stars
                                    setScore={setScore}
                                    onlyDisplay={true}
                                    readScore={score}
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
                                        <Link to={`/user/${val.user_id}`}>
                                        <img src={ user_icon } alt="user"/>
                                        <div className="username">{val.username}</div>
                                        </Link>
                                    </div>
                                    <div className="review-part">{val.review} </div>
                                    <div className="review-part">
                                        <img src={ star } alt="book"/>
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

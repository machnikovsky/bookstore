import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import cash from '../../assets/icons/cash.png';
import star from '../../assets/icons/star.png';
import book_icon from '../../assets/icons/book-icon.png';
import ebook_icon from '../../assets/icons/ebook-icon.png';
import audiobook_icon from '../../assets/icons/audiobook-icon.png';
import not_found from '../../assets/other/404-image-not-found.jpg';


const BookList = ({bookList, rated}) => {
    return (
        <div className="book-list">
        { bookList && (
                    bookList.map((book, index) => (
                        <Link to={`/book/${book.book_id}/issue/${book.issue_id}`} className="single-book" key={ index }>
                            <div className="book-type-container">
                                { book.book_type === 'BOOK' && <img src={ book_icon } alt="price"/> }
                                { book.book_type === 'EBOOK' && <img src={ ebook_icon } alt="price"/> }
                                { book.book_type === 'AUDIOBOOK' && <img src={ audiobook_icon } alt="price"/> }
                            </div>

                            <div className="poster-container">
                                    <img 
                                    src={ book.image_url }
                                    onError={(event) => event.target.setAttribute("src", not_found)} 
                                    className="poster" 
                                    alt="book-poster"/>
                                </div>
                                <h2 className="book-title">{ book.title }</h2>
                                { book.authors.map((val, idx) => (
                                    <h2 className="book-author">{val.firstName} {val.lastName}</h2>
                                )) }
                                <div className="book-price-score-container">
                                    { rated ?
                                        <div className="book book-score">
                                            <div className="image-container">
                                                <img src={ star } alt="score"/>
                                            </div>
                                            <h3 className="book-score-header">{ book.your_score }</h3>
                                        </div>
                                        :
                                        <>
                                        <div className="book book-price">
                                            <div className="image-container">
                                                <img src={ cash } alt="price"/>
                                            </div>
                                            <h3 className="book-price-header">{ book.price } zł</h3>
                                        </div>
                                        <div className="book book-score">
                                        <div className="image-container">
                                        <img src={ star } alt="score"/>
                                        </div>
                                        <h3 className="book-score-header">{ book.mean_score }</h3>
                                        </div>
                                        </>
                                    }

                                </div>
                        </Link>
                    ))
                
            )}
        </div>
    )
}

export default BookList

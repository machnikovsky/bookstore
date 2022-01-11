import React from 'react'
import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';
import not_found from '../../assets/other/404-image-not-found.jpg';


const BookList = ({bookList}) => {
    return (
        <div className="book-list">
        { bookList && (
                    bookList.map((book, index) => (
                        <Link to={`/${book.book_type}/${book.book_id}`} className="single-book" key={ index }>
                                <div className="poster-container">
                                    <img 
                                    src={ book.image_url }
                                    onError={(event) => event.target.setAttribute("src", not_found)} 
                                    className="poster" 
                                    alt="book-poster"/>
                                </div>
                                <h2 className="book-title">{ book.title }</h2>
                                <div className="book-price-container">
                                    <div className="price-image-container">
                                        <img src={ star } alt="price"/>
                                    </div>
                                    <h3 className="book-price">{ book.price } zł</h3>
                                </div>
                        </Link>
                    ))
                
            )}
        </div>
    )
}

export default BookList

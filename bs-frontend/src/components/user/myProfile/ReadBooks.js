import React, {useContext, useEffect, useState} from 'react'
import GetAndSetUtil from "../../../api/GetAndSetUtil";
import UserContext from "../../../auth/UserContext";
import BookList from "../../books/BookList";

const ReadBooks = () => {

    const {user, setUser} = useContext(UserContext);
    const [readBooks, setReadBooks] = useState([]);


    useEffect(() => {
        GetAndSetUtil.getAndSetAllBooksRatedByUser(user, setReadBooks);
    }, [])

    return (
        <div className="single-option read-books">
        <h3>Twoje przeczytane książki:</h3>
        <BookList bookList={readBooks} rated={true}/>
    </div>
    )
}

export default ReadBooks

import book_one from '../../assets/books/book-1.png';
import book_two from '../../assets/books/book-2.png';
import book_three from '../../assets/books/book-3.png';

const Propositions = () => {
    return (
            <div className="propositions-container">
                <h1>Nasze propozycje</h1>
                <div className="propositions">
                    <div className="proposition_one"><img src={book_one} alt="book" /></div>
                    <div className="proposition_two"><img src={book_two} alt="book" /></div>
                    <div className="proposition_three"><img src={book_three} alt="book" /></div>
                </div>
            </div>
    );
}

export default Propositions;
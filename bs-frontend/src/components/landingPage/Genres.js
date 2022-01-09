import { Link } from 'react-router-dom';

const Genres = () => {
    return (
    <div className="genres-container">
        <div className="genres-header">
            <h2>
                Czego szukasz?
            </h2>
        </div>

        <div className="genres">
            <Link to="/books" className="genre"><li className="genres-header"><h1>Literatora obyczajowa</h1></li></Link>
            <Link to="/books" className="genre"><li className="genres-header"><h1>Romans</h1></li></Link>
            <Link to="/books" className="genre"><li className="genres-header"><h1>Reportaz</h1></li></Link>
            <Link to="/books" className="genre"><li className="genres-header"><h1>Fantastyka</h1></li></Link>
            <Link to="/books" className="genre"><li className="genres-header"><h1>Kryminał</h1></li></Link>
            <Link to="/books" className="genre"><li className="genres-header"><h1>Horror</h1></li></Link>
        </div>
    </div>
    );
}

export default Genres;
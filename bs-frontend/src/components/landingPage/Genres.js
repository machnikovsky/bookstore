import { Link } from 'react-router-dom';

const Genres = () => {
    return (
    <div className="genres-container">
        <div className="genres-header-div">
            <h1>
                Czego szukasz?
            </h1>
        </div>

        <div className="genres">
            <Link to="/books" state={{ genre: 'Fikcja' }}     className="genre"><li className="genres-header"><h1>Fikcja</h1></li></Link>
            <Link to="/books" state={{ genre: 'Romans' }}     className="genre"><li className="genres-header"><h1>Romans</h1></li></Link>
            <Link to="/books" state={{ genre: 'Reportaż' }}   className="genre"><li className="genres-header"><h1>Reportaż</h1></li></Link>
            <Link to="/books" state={{ genre: 'Fantastyka' }} className="genre"><li className="genres-header"><h1>Fantastyka</h1></li></Link>
            <Link to="/books" state={{ genre: 'Kryminał' }}   className="genre"><li className="genres-header"><h1>Kryminał</h1></li></Link>
            <Link to="/books" state={{ genre: 'Horror' }}     className="genre"><li className="genres-header"><h1>Horror</h1></li></Link>
        </div>
    </div>
    );
}

export default Genres;
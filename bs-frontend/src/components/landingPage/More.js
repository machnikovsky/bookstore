import { Link } from 'react-router-dom';
import search from '../../assets/icons/search-icon.png';

const More = () => {
    return (
            <div className="more-container">
                <Link to="/search">
                    <div className="button-content-container">
                        <h1>Znajdź więcej</h1>
                        <img src={ search } alt="search" />
                    </div>
                </Link> 
            </div>
    );
}

export default More;
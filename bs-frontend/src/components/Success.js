import congratulations from '../assets/other/congratulations.png';
import {useLocation} from "react-router-dom";

const Success = () => {
    const location = useLocation();

    return (
        <div className="success-container center">
            <div className="image-container">
                <img src={congratulations} alt=""/>
            </div>
            <div className="text">
                {
                    location.state.method ===  'online' &&
                    <>
                        <p>Udało się złożyć zamówienie, faktura zostanie dołączona do zamówienia.</p>
                        <p>Dziękujemy za zakupy w Bookstore!</p>
                    </>
                }
                {
                    location.state.method ===  'stationary' &&
                    <>
                        <p>Udało się zarezerwować zamówienie.</p>
                        <p>Zapraszamy do księgarni po odbiór.</p>
                        <p>Dziękujemy za zakupy w Bookstore!</p>
                    </>
                }
            </div>

        </div>
    );
}

export default Success;
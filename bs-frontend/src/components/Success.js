import congratulations from '../assets/other/congratulations.png';

const Success = () => {
    return (
        <div className="success-container center">
            <div className="image-container">
                <img src={congratulations} alt=""/>
            </div>
            <div className="text">
                <p>Udało się złożyć zamówienie, faktura zostanie dołączona do zamówienia.</p>
                <p>Dziękujemy za zakupy w Bookstore!</p>
            </div>

        </div>
    );
}

export default Success;
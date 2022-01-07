
const Genres = () => {
    return (
    <div className="genres-container">
        <div className="genres-header">
            <h2>
                Czego szukasz?
            </h2>
        </div>

        <div className="genres">
            <div className="genre">
                <div className="genres-header">
                <h1>Literatora obyczajowa</h1>
                </div>
            </div>

            <div className="genre">
                <div className="genres-header">
                    <h1>Romans</h1>
                </div>
            </div>

            <div className="genre">
                <div className="genres-header">
                    <h1>Reportaz</h1>
                </div>
            </div>

            <div className="genre">                
                <div className="genres-header">
                    <h1>Fantastyka</h1>
                </div>
            </div>

            <div className="genre">
                <div className="genres-header">
                    <h1>Kryminał</h1>
                </div>
            </div>

            <div className="genre">
                <div className="genres-header">
                    <h1>Horror</h1>
                </div>
            </div>

        </div>
    </div>
    );
}

export default Genres;
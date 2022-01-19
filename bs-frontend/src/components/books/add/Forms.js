export const GenreForm = ({genre, setGenre}) => {
    return(
        <div className="select-div-container">
            <div className="select-header">Gatunek</div>
            <select name={genre} id={genre} onChange={(e) => {setGenre(e.target.value)}}>
                <option value="Horror">Horror</option>
                <option value="Literatura obyczajowa">Literatura obyczajowa</option>
                <option value="Kryminał">Kryminał</option>
                <option value="Science Fictio">Science Fictio</option>
                <option value="Fantastyka">Fantastyka</option>
                <option value="Przygoda">Przygoda</option>
                <option value="Romans">Romans</option>
                <option value="Tajemnica">Tajemnica</option>
                <option value="Fikcja">Fikcja</option>
                <option value="Reportaż">Reportaż</option>
                <option value="Dla dzieci">Dla dzieci</option>
            </select>
        </div>
    );
}

export const LanguagesForm = ({language, setLanguage}) => {
    return(
        <div className="select-div-container">
            <div className="select-header">Język</div>
            <select name={language} id={language} onChange={(e) => {setLanguage(e.target.value)}}>
                <option value="Polski">Polski</option>
                <option value="Angielski">Angielski</option>
                <option value="Niemiecki">Niemiecki</option>
                <option value="Hiszpański">Hiszpański</option>
                <option value="Włoski">Włoski</option>
            </select>
        </div>
    );
}

export const CoverTypeForm = ({coverType, setCoverType}) => {
    return(
        <div className="select-div-container">
            <div className="select-header">Rodzaj okładki</div>
            <select name={coverType} id={coverType} onChange={(e) => {setCoverType(e.target.value)}}>
                <option value="HARDCOVER">Twarda</option>
                <option value="PAPERBACK">Miękka</option>
                <option value="SOFTWRAP">Z obwolutą</option>
                <option value="">Brak</option>
            </select>
        </div>
    );
}

export const BookTypeForm = ({bookType, setBookType}) => {
    return(
        <div className="select-div-container">
            <div className="select-header">Rodzaj książki</div>
            <select name={bookType} id={bookType} onChange={(e) => {setBookType(e.target.value)}}>
                <option value="BOOK">Książka</option>
                <option value="EBOOK">Ebook</option>
                <option value="AUDIOBOOK">Audiobook</option>
            </select>
        </div>
    );
}

export const PublishingHouseForm = ({publishingHouse, setPublishingHouse}) => {
    return(
        <div className="select-div-container">
            <div className="select-header">Wydawnictwo</div>
            <select name={publishingHouse} id={publishingHouse} onChange={(e) => {setPublishingHouse(e.target.value)}}>
                <option value="Albatros">Albatros</option>
                <option value="Prószyński i S-ka">Prószyński i S-ka</option>
                <option value="Helion">Helion</option>
                <option value="Znak">Znak</option>
                <option value="Mag">Mag</option>
                <option value="Rebis">Rebis</option>
            </select>
        </div>
    );
}
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import {BookTypeForm, CoverTypeForm, GenreForm, LanguagesForm, PublishingHouseForm} from "./Forms";
import ApiCall from "../../../api/ApiCall";


const AddBook = () => {

    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [authorFirstName, setAuthorFirstName] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');
    const [authorCountry, setAuthorCountry] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('ADVENTURE');
    const [originalPublicationYear, setOriginalPublicationYear] = useState('');
    const [language, setLanguage] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [numberOfPages, setNumberOfPages] = useState('');
    const [coverType, setCoverType] = useState('HARDCOVER');
    const [bookType, setBookType] = useState('BOOK');
    const [price, setPrice] = useState('');
    const [number, setNumber] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [publishingHouse, setPublishingHouse] = useState('Albatros');

    const handleAdd = async (e) => {
        e.preventDefault();

        e.preventDefault();
        let addBookDTO = {
            title,
            authorFirstName,
            authorLastName,
            authorCountry,
            description,
            genre,
            originalPublicationYear,
            language,
            publicationYear,
            numberOfPages,
            coverType,
            bookType,
            price,
            number,
            imageUrl,
            backgroundUrl,
            publishingHouse
        }

        await ApiCall.addNewIssue(addBookDTO)
            .then(result => {
                console.log(result)
                navigate(`/book/${result.data.book_id}/issue/${result.data.issue_id}`)
            })
            .catch(error => {
                setShowError(true);
                console.log("Error: ", error.response.data);
            })
    }


    return (
        <div className="center">
            <div className="add">
                <h1>Dodaj książkę</h1>
                <form onSubmit={handleAdd}>
                    <input
                        type="text"
                        placeholder="Tytuł"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Imię autora"
                        required
                        value={authorFirstName}
                        onChange={(e) => setAuthorFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nazwisko autora"
                        required
                        value={authorLastName}
                        onChange={(e) => setAuthorLastName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Kraj pochodzenia autora"
                        required
                        value={authorCountry}
                        onChange={(e) => setAuthorCountry(e.target.value)}
                    />
                    <textarea
                        placeholder="Opis"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Data pierwszego wydania"
                        required
                        value={originalPublicationYear}
                        onChange={(e) => setOriginalPublicationYear(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Data wydania"
                        required
                        value={publicationYear}
                        onChange={(e) => setPublicationYear(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Liczba stron"
                        required
                        value={numberOfPages}
                        onChange={(e) => setNumberOfPages(e.target.value)}
                    />
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="Cena"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <textarea
                        placeholder="URL okładki"
                        required
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <textarea
                        placeholder="URL tła"
                        required
                        value={backgroundUrl}
                        onChange={(e) => setBackgroundUrl(e.target.value)}
                    />
                    <input
                        type="number"
                        min="0"
                        placeholder="Liczba sztuk"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <GenreForm genre={genre} setGenre={setGenre}/>
                    <LanguagesForm language={language} setLanguage={setLanguage}/>
                    <CoverTypeForm coverType={coverType} setCoverType={setCoverType}/>
                    <BookTypeForm bookType={bookType} setBookType={setBookType}/>
                    <PublishingHouseForm publishingHouse={publishingHouse} setPublishingHouse={setPublishingHouse} />

                    {showError && <div className="error-message">Nie udało się dodać książki.</div>}
                    <button>Dodaj</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
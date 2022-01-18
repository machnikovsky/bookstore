import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../auth/Auth";

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('MALE');
    const [localization, setLocalization] = useState('Warszawa');// Kraków, Wrocław, Poznań
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();



    const handleRegister = async (e) => {
        e.preventDefault();
        const registerResult = await Auth.register(username, email, password,
            firstName, lastName, phoneNumber, gender, localization);

        if (registerResult) {
            navigate('/');
        } else {
            setShowError(true);
        }
    }


    return (
        <div className="center">
            <div className="register">
                <h1>Zarejestruj</h1>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nazwa uzytkownika"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Haslo"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Imie"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nazwisko"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Numer telefonu"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <div class="radio-header">Płeć</div>
                    <div className="radio-container">

                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="MALE"
                                       checked={gender === 'MALE'}
                                       onChange={e => setGender(e.target.value)}
                                />
                                Mężczyzna
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="FEMALE"
                                       checked={gender === 'FEMALE'}
                                       onChange={e => setGender(e.target.value)}
                                />
                                Kobieta
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="OTHER"
                                       checked={gender === 'OTHER'}
                                       onChange={e => setGender(e.target.value)}
                                />
                                Inna
                            </label>
                        </div>
                    </div>
                    <div className="radio-header">Miejscowość</div>

                    <div className="radio-container">

                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="Warszawa"
                                       checked={localization === 'Warszawa'}
                                       onChange={e => setLocalization(e.target.value)}
                                />
                                Warszawa
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="Kraków"
                                       checked={localization === 'Kraków'}
                                       onChange={e => setLocalization(e.target.value)}
                                />
                                Kraków
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="Wrocław"
                                       checked={localization === 'Wrocław'}
                                       onChange={e => setLocalization(e.target.value)}
                                />
                                Wrocław
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       value="Poznań"
                                       checked={localization === 'Poznań'}
                                       onChange={e => setLocalization(e.target.value)}
                                />
                                Poznań
                            </label>
                        </div>
                    </div>
                    { showError && <div className="error-message">Niepoprawne dane.</div> }
                    <button>Zarejestruj</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
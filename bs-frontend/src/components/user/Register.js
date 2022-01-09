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
    const [gender, setGender] = useState('');
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        Auth.register(username, email, password, firstName, lastName, phoneNumber, gender);
        navigate('/');
    }


    return (
        <div className="register">
            <h1>Zarejestruj</h1>
            <form onSubmit={handleSubmit}>
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
                <button>Zarejestruj</button>
            </form>
        </div>
    );
}

export default Register;
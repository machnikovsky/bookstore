import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ApiCall from "../../../api/ApiCall";
import UserContext from "../../../auth/UserContext";
import Auth from "../../../auth/Auth";

const UserInfo = () => {

    const {user, setUser} = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [password, setPassword] = useState('');
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        ApiCall.getUserInfo(user)
        .then(res => {
            return res.data;
         })
        .then(data => {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setCreationDate(data.creationDate);
        })
        .catch(res => {
            console.log("[UserInfo] Error getting user info: ", res.response.data);
            setFirstName(null);
            setLastName(null);
            setEmail(null);
            setCreationDate(null);
            setUser(null);
            navigate('/logout');
        });
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();
        ApiCall.updateUserInfo(
            firstName !== '' ? firstName : null,
            lastName !== '' ? lastName : null,
            email !== '' ? email : null,
            password !== '' ? password : null
        );

        setEditMode(false);
    }

    const handleDeleteAccount = () => {
        ApiCall.deleteMyAccount();
        Auth.logout();
        setUser(null);
        navigate('/');
    }

    return (
        <div className="single-option info">
   <button className={editMode ? "edit-mode-button red" : "edit-mode-button"} onClick={() => setEditMode(!editMode)}>
                {editMode ? 'Wyłącz edycje' : 'Edytuj dane'}
            </button>
            { 
                editMode ?
                    <form>
                        <label>Imię</label>
                        <input
                            type="text"
                            placeholder="Imię"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label>Nazwisko</label>
                        <input
                            type="text"
                            placeholder="Nazwisko"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Hasło</label>
                        <input
                            type="password"
                            placeholder="Hasło"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleEdit}>Zatwierdź zmiany</button>
                    </form>
                    :

            <div className="info-list">
                <div className="single-info"><div>Imię:</div> <div>{firstName}</div> </div>
                <div className="single-info"><div>Nazwisko:</div> <div>{lastName}</div> </div>
                <div className="single-info"><div>Email:</div> <div>{email}</div> </div>
                <div className="single-info"><div>Data utworzenia:</div> <div>{creationDate}</div> </div>
            </div>
}
            {!editMode &&
                <button className="delete-account-button red" onClick={handleDeleteAccount}>
                    Usuń konto
                </button>
            }
        </div>
    )
}

export default UserInfo

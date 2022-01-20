import {useState} from "react";
import ApiCall from "../../../api/ApiCall";
import {useNavigate} from "react-router-dom";

const ManageUsers = () => {

    const [query, setQuery] = useState('');
    const [usersByQuery, setUsersByQuery] = useState([]);
    const navigate = useNavigate();


    const handlePromote = async (username) => {
        await ApiCall.promoteUser(username)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log("Promoting user, error: ", err.message);
            })

        handleSearchQuery(query);
    }

    const handleSearchQuery = (query) => {
        setQuery(query);
        if (query === '') {
            setUsersByQuery([]);
        } else {
            ApiCall.findUsersByQuery(query)
                .then(res => {
                    return res.data;
                })
                .then(data => {
                    setUsersByQuery(data);
                })
        }
    }

    const getRoleString = (val) => {
        return "Aktualna rola: " + val.roles[0];
    }


    return (
        <div className="single-option users">
            <div className="promote-user">
                <h2>Awansuj użytkownika:</h2>
                <form>
                    <label>Podaj jego nazwę:</label>
                    <input
                        type="text"
                        required
                        value={query}
                        onChange={e => handleSearchQuery(e.target.value)}
                    />
                </form>
                { usersByQuery && (
                    usersByQuery.map((val, idx) => (
                        <div className="queried-user" key={idx}>
                            <div className="queried-user-name">
                                <h5>{getRoleString(val)}</h5>
                                <h2>{val.username}</h2>
                            </div>
                            {
                            val.roles.includes("ADMIN") ?
                                <div>Nie można awansować</div>
                                :
                                <button className="user-to-promote-button" onClick={() => handlePromote(val.userId)}>
                                    Awansuj
                                </button>
                            }

                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ManageUsers
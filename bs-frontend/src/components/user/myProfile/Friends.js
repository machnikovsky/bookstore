import { useEffect, useState } from "react";
import ApiCall from "../../../api/ApiCall";
import {useNavigate} from "react-router-dom";

const Friends = () => {

    const [friends, setFriends] = useState([]);
    const [query, setQuery] = useState('');
    const [friendsByQuery, setFriendsByQuery] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ApiCall.getAllFriends()
        .then(res => {
            return res.data;
        })
        .then(data => {
            setFriends(data);
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    }, [])

    const handleAdd = async (username) => {
        await ApiCall.addNewFriend(username)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log("Adding new friend, error: ", err.message);
        })
        await ApiCall.getAllFriends()
        .then(res => {
            return res.data;
        })
        .then(data => {
            setFriends(data);
        })
        .catch(err => {
            console.log('Error: ', err);
        })
        handleFriendsSearchQuery(query);
    }

    const handleFriendsSearchQuery = (query) => {
        setQuery(query);
        if (query === '') {
            setFriendsByQuery([]);
        } else {
            ApiCall.findFriendsByQuery(query)
            .then(res => {
                return res.data;
            })
            .then(data => {
                setFriendsByQuery(data);
            })
        }
    }


    return (
        <div className="single-option friends">
            <div className="friends-list">
                <h2>Twoi znajomi:</h2>
                { friends && (
                    friends.map((val, idx) => (
                        <button onClick={() => {navigate(`/user/${val.userId}`)}}>
                            <div className="single-friend" key={idx}>
                                { val.username }
                            </div>
                        </button>
                    ))
                )}
            </div>
            <div className="add-friend">
                <h2>Dodaj znajomego:</h2>
                <form>
                    <label>Podaj jego nazwę:</label>
                    <input 
                        type="text"
                        required
                        value={query}
                        onChange={e => handleFriendsSearchQuery(e.target.value)}
                    />
                </form>
                { friendsByQuery && (
                    friendsByQuery.map((val, idx) => (
                        <div className="queried-friend">
                            <div className="name">{val.username}</div>
                            <button className="friend-to-add-button" onClick={() => handleAdd(val.username)} key={idx}>
                                Dodaj
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Friends
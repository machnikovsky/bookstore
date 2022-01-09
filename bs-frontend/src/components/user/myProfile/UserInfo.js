import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ApiCall from "../../../api/ApiCall";
import UserContext from "../../../auth/UserContext";

const UserInfo = () => {

    const {user, setUser} = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [creationDate, setCreationDate] = useState('');
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

    return (
        <div className="single-option">
            <div className="info-list">
                <div className="single-info"><div>Imię:</div> <div>{firstName}</div> </div>
                <div className="single-info"><div>Nazwisko:</div> <div>{lastName}</div> </div>
                <div className="single-info"><div>Email:</div> <div>{email}</div> </div>
                <div className="single-info"><div>Data utworzenia:</div> <div>{creationDate}</div> </div>
            </div>
        </div>
    )
}

export default UserInfo

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ApiCall from '../../../api/ApiCall';
import UserContext from '../../../auth/UserContext';
import ProfileNav from './ProfileNav';
import Stats from './Stats';
import UserInfo from './UserInfo';
import ReadBooks from './ReadBooks';

const MyProfile = () => {

    const {user, setUser} = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [readBooks, setReadBooks] = useState([]);
    const [currentView, setCurrentView] = useState('info');
    const navigate = useNavigate();

    useEffect(() => {
        ApiCall.getUserInfo(user)
        .then(res => {
            console.log('Recieved data: ', res.data);
            return res.data;
         })
        .then(data => {
            setFirstName(data.firstName);
            setLastName(data.lastName);
        })
        .catch(e => {
            console.log("[MyProfile] Error getting user info: ", e);
            setUser(null);
            navigate('/logout');
        });
    }, [])

    const capitalize = s => s && s[0].toUpperCase() + s.slice(1)


    return (
        <>
        { user ?
        <div className="profile-container">
            { firstName && lastName && <h1>Witaj, {capitalize(firstName)} {capitalize(lastName)}!</h1>}
            <div className="nav-and-content">
                <ProfileNav setCurrentView={setCurrentView} />
                { currentView === 'books'  && <ReadBooks readBooks={readBooks}/> }
                { currentView === 'info'    && <UserInfo/> }
                { currentView === 'stats'    && <Stats/> }
            </div>       
        </div>
        :
        <div className="profile-container">
            Zaloguj się, aby przeglądać profil.
        </div>
        }
        </>
    )
}

export default MyProfile

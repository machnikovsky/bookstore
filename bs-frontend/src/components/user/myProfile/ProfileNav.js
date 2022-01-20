import React from 'react'

const ProfileNav = ({setCurrentView, roles}) => {
    
    return (
        <div className="profile-nav">
            {
                roles && roles.includes('USER') &&
                <button className="option" onClick={() => setCurrentView('books')}>Przeczytane książki</button>
            }
            <button className="option" onClick={() => setCurrentView('info')}   >Dane             </button>
            <button className="option" onClick={() => setCurrentView('stats')}  >Statystyki       </button>
            {
                roles && roles.includes('ADMIN') &&
                <button className="option" onClick={() => setCurrentView('manage')}  >Zarządzaj       </button>
            }
        </div>
    )
}

export default ProfileNav

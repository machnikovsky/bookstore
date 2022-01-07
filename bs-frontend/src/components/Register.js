
const Register = () => {

    return (
        <div className="register">
            <h1>Zarejestruj</h1>
                <input
                    type="text"
                    placeholder="Nazwa uzytkownika"
                   
                />
                <input
                    type="text"
                    placeholder="Email"
    
                />
                <input 
                    type="password"
                    placeholder="Haslo"
                
                ></input>
                <input
                    type="text"
                    placeholder="Imie"
                  
                />
                <input
                    type="text"
                    placeholder="Nazwisko"
                   
                />
                <button>Zarejestruj</button>
        </div>
    );
}

export default Register;
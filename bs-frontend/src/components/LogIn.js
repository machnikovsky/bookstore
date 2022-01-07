
const Login = () => {


    return (
        <div className="login">
            <h1>Zaloguj</h1>
            <form>
                <input                    
                placeholder="Email"
                   
                />
                <input 
                    placeholder="Haslo"
               
                ></input>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
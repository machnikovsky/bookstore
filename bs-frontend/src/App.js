import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopShape from './components/TopShape';
import Navbar from './components/Navbar';
import Home from './components/landingPage/Home';
import Login from './components/user/LogIn';
import Logout from './components/user/Logout';
import Register from './components/user/Register';
import MyProfile from './components/user/myProfile/MyProfile';
import './styles/styles.css'
import About from './components/About';
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from './auth/UserContext';
import Search from "./components/search/Search";
import SingleBook from "./components/books/SingleBook";
import Cart from "./components/Cart";
import Success from "./components/Success";
import AddBook from "./components/books/add/AddBook";

const App = () => {

    const [user, setUser] = useLocalStorage("user", null);


    return (
        <Router>
            <UserContext.Provider value={{user, setUser}}>
                <TopShape/>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/books" element={<Search />}/>
                    <Route exact path="/book/:bookId/issue/:issueId" element={<SingleBook />}/>
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/login" element={<Login />}/>
                    <Route exact path="/logout" element={<Logout />}/>
                    <Route exact path="/register" element={<Register />}/>
                    <Route exact path="/profile" element={<MyProfile />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/success" element={<Success />} />
                    <Route exact path="/add" element={<AddBook />} />
                </Routes>
            </UserContext.Provider>
        </Router>
    );
}

export default App;

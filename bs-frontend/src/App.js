import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import TopShape from './components/TopShape';
import Navbar from './components/Navbar';
import Main from './components/landingPage/Main';
import Propositions from './components/landingPage/Propositions';
import BottomShape from './components/BottomShape';
import Genres from './components/landingPage/Genres';
import Home from './components/landingPage/Home';
import Books from './components/Books';
import Login from './components/LogIn';
import Register from './components/Register';
import './styles/styles.css'
import About from './components/About';

const App = () => {
  return (
    <Router>
    <div>
        <TopShape />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

import TopShape from './components/TopShape';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Propositions from './components/Propositions';
import BottomShape from './components/BottomShape';
import Genres from './components/Genres';
import './styles/styles.css'

const App = () => {
  return (
    <div>
      <div className="top">
        <TopShape />
        <Navbar />
        <Main />
        <Propositions />
        <BottomShape />
      </div>
      <Genres />

    </div>
  );
}

export default App;

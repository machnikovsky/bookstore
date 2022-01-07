import TopShape from '../../components/TopShape';
import Navbar from '../../components/Navbar';
import BottomShape from '../../components/BottomShape';
import Main from '../../components/landingPage/Main';
import Propositions from '../../components/landingPage/Propositions';
import Genres from '../../components/landingPage/Genres';


const Home = () => {

    return (
    <div className="about">
        <Propositions />
        <BottomShape />
        <Genres />
    </div>
    );
}

export default Home;
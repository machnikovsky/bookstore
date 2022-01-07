import BottomShape from '../../components/BottomShape';
import Main from '../../components/landingPage/Main';
import Propositions from '../../components/landingPage/Propositions';
import Genres from '../../components/landingPage/Genres';


const Home = () => {

    return (
    <div>
        <div className="top">
            <Main />
            <Propositions />
            <BottomShape />
        </div>
        <div >
            <Genres />
        </div>
    </div>
    );
}

export default Home;
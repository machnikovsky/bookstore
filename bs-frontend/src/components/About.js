import bookstore from '../assets/other/aboutBookstore.png'


const About = () => {

    return (
        <div className="about_container">
            <div className="name">
                <div>
                    <h1>Bookstore</h1>
                    <h2>Nasza historia</h2>
                </div>
                <div className='bookstore-image-container'>
                    <img src={bookstore} alt="book store" />
                </div>
            </div>
            <div className="description">
                <p>Nasza księgarnia została założona w roku 2012. Od wielu lat sprzedajemy książki w naszych sklepach w Warszawie, Krakowie, Wrocławie i Poznaniu, oraz naszym sklepie online.</p>

                <p>Oferujemy sprzedaz ksiazek, ebookow i audiobookow. Pracują u nas profesjonalisci, ktorzy starannie dobieraja ksiazki, aby zostawic tylko najbardziej wyselekcjonowane pozycje. Zapraszamy do naszych ksiegarni stacjonarnych, gdzie mozemy zawsze doradzic co  do wyboru ksiazki podczas rozmowy. Klimat w naszych ksiegarniach jest niezapomniany!</p>
            </div>
        </div>
    );
}

export default About;
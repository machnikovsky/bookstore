import {useEffect, useState} from "react";
import SearchUtil from "../../api/GetAndSetUtil";
import {Link} from "react-router-dom";

const Propositions = () => {

    const [propositions, setPropositons] = useState([]);

    useEffect(() => {
        SearchUtil.getAndSetPropositions(setPropositons);
    }, [])

    return (
            <div className="propositions-container">
                <h1>Nasze propozycje</h1>
                <div className="propositions">
                {
                    propositions && propositions.map((val, idx) => (
                        <Link to={`/book/${val.issue_id}`} className="proposition" key={ idx }>
                            <img src={val.image_url} alt="book" />
                        </Link>
                    ))
                }
                </div>
            </div>
    );
}

export default Propositions;
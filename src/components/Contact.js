import { Link } from "react-router-dom";

const Contact = () => {
    return(
        <div>
            <h1>This is Contact us page</h1>
            <p>Join Us With:- </p>
            <ul>
                <li>
                    <Link to="/instagram">Instagram</Link> Link
                </li>
                <li>
                    <Link to="/youtube">Youtube</Link> Link
                </li>
                <li>
                    <Link to="/github">Github</Link> Link
                </li>
            </ul>
        </div>
    );
};

export default Contact;
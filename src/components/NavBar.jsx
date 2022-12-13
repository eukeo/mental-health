import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <Link to="/" id="home">Home</Link>
                <Link to="/quotes" id="quotes">Quotes</Link>
                <Link to="/help" id="help">Help</Link>
            </ul>
        </nav>
    )
};
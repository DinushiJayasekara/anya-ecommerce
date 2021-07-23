import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="navbar">
                <div className="navbar-links">
                    <Link to="#">Facebook</Link>
                    <Link to="#">Instagram</Link>
                    <Link to="#">anya@gmail.com</Link>
                </div>
                <div className="logo">
                    <Link to="index.html">Anya</Link>
                </div>
                <div className="navbar-links">
                    <Link to="#">Sign In</Link>
                    <Link to="#">Cart</Link>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
import { Link } from "react-router-dom";
import '../css/navbar.css'
function Navbar() {
    return (
        <>
            {/* Navigation Bar Container */}
            <div className="navbar">
                {/* Brand Section */}
                <div className="nav-brand">
                    {/* Navigation Link to Home */}
                    <Link to="/">Movievibe</Link>
                </div>
                {/* Navigation Links Section */}
                <div className="navbar-links">
                    {/* Link to Home Page */}
                    <Link to="/" className="nav-link">Home</Link>
                    {/* Link to Favorites Page */}
                    <Link to="/favorites"  className="nav-link">Favorite</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;

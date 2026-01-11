import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const isActive = (path) => location.pathname === path ? "btn-light text-dark fw-bold" : "btn-outline-light";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand fs-3 fw-bold text-warning" to="/">
                    👨‍🍳 Вкусни Рецепти
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <div className="d-flex gap-2 mt-2 mt-lg-0">
                        <Link 
                            to="/" 
                            className={`btn rounded-pill px-4 ${isActive('/')}`}
                            onClick={closeMenu}
                        >
                            🏠 Рецепти
                        </Link>
                        <Link 
                            to="/gallery" 
                            className={`btn rounded-pill px-4 ${isActive('/gallery')}`}
                            onClick={closeMenu}
                        >
                            🎥 AI Галерия
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
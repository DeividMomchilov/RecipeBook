import { Link } from "react-router";

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">
            <Link className="navbar-brand fw-bold" to="/">👨‍🍳 Моите Рецепти</Link>
            <div className="d-flex gap-2">
                <Link to="/" className={`btn btn-light btn-sm ${location.pathname === '/' ? '' : 'text-primary'}`}>Рецепти</Link>
                <Link to="/gallery" className={`btn btn-light btn-sm ${location.pathname === '/gallery' ? '' : 'text-primary'}`}>AI Галерия</Link>
            </div>
            </div>
        </nav>
    )
}
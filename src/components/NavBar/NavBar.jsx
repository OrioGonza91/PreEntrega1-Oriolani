import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><Logo /></Link>
            <ul className="menu">
                <li><Link to="/" className="menu-link">Inicio</Link></li>
                <li><Link to="/productos" className="menu-link">Productos</Link></li>
                <li><Link to="/productos/running" className="menu-link">Running</Link></li>
                <li><Link to="/productos/zapatillas" className="menu-link">Zapatillas</Link></li>
                <li><Link to="/productos/remeras" className="menu-link">Remeras</Link></li>
                <li><Link to="/productos/buzos" className="menu-link">Buzos</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
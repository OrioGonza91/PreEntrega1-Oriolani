import { Link } from "react-router-dom"


function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="redes">
                    <Link to="https://www.instagram.com/adidas/" target="_blank" >
                        <i class="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to="https://twitter.com/adidas" target="_blank">
                        <i class="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link to="https://www.facebook.com/adidas/" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </Link>
                </div>
                <p>Todos los derechos reservados por copyright ©</p>
            </footer>
        </div>
    )
}

export default Footer
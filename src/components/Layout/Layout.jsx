import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

function Layout({children}) {
    return (
        <div className="layout--container">
            <div>
            <NavBar />
            </div>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout